import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import User from '../models/authentication';
import {
  createSession,
  getSession,
  destroySession,
} from '../statelessSession';

const saltRounds = 10;

function trimAndLowerCase(text: string): string {
  text = text.trim();
  text = text.toLowerCase();
  return text;
}

async function doesExist(email: string): Promise<boolean> {
  const query = await User.findOne({ email });
  if (query === null) return false;
  return true;
}

async function checkCredentials(email: string, password: string): Promise<boolean> {
  try {
    if (!(await doesExist(email))) return false;
    return User.findOne({ email }).then((query) => {
      if (query) {
        return bcrypt.compare(password, query.password);
      }
      return false;
    });
  } catch (error) {
    console.log(error);
    return false;
  }
}

const create = async (req: Request, res: Response): Promise<void> => {
  try {
    let {name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    email = trimAndLowerCase(email);
    if (await doesExist(email)) {
      res.status(401).send('email already exists');
      return;
    }
    const user = await User.create({
        name,
      email,
      password: hashedPassword,
      
    });

    await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('login is hit');
    let { email, password } = req.body;
    email = trimAndLowerCase(email);
    if (!(email && password)) {
      res.status(400).send('missing credentials');
      return;
    }

    const credentialsOkay = await checkCredentials(email, password);
    if (!credentialsOkay) {
      res.status(401).send('invalid credentials');
      return;
    }

    const token = createSession(email);
    res.cookie('accessToken', token, {
      httpOnly: false,
      secure: false,
      sameSite: 'strict',
    });

    res.status(200).send({ accessToken: token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const profile = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.cookies.accessToken;
    const session = getSession(token);
    if (!session) {
      res.status(401).send('invalid session');
      return;
    }
    const userEmail = session.userEmail;
    const profile = await User.findOne({ email: userEmail });
    if (!profile) {
      res.status(404).send('user not found');
      return;
    }
    const {_id, name,email } = profile;
    res.status(200).send({ _id,name,email});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const logout = (req: Request, res: Response): void => {
  try {
    const token = req.cookies.accessToken;
    if (!destroySession(token)) {
      res.status(400).send('No session to logout');
      return;
    }
    res.status(200).send({});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default { create, login, profile, logout };
