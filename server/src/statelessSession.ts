import jwt from 'jsonwebtoken';

const SUPER_SECRET_KEY = 'ITS_SECRET';
const blockedList: string[] = [];

interface SessionData {
  expiresAt: number;
  userEmail: string;
}

const createSession = (userEmail: string): string => {
  const expiry = new Date();
  expiry.setMonth(expiry.getMonth() + 1);

  const newSession: SessionData = {
    expiresAt: expiry.valueOf(),
    userEmail: userEmail,
  };
  return jwt.sign(newSession, SUPER_SECRET_KEY); //encoded session
};

const getSession = (token: string): SessionData | undefined => {
  if (blockedList.includes(token)) return undefined;

  try {
    const sessionData = jwt.verify(token, SUPER_SECRET_KEY) as SessionData;
    if (sessionData.expiresAt < Date.now()) {
      console.log('Token has expired');
      return undefined;
    }
    return sessionData;
  } catch (err) {
    console.log('Invalid token');
    return undefined;
  }
};

const destroySession = (token: string): boolean => {
  blockedList.push(token);
  return true;
};

export {
  createSession,
  getSession,
  destroySession,
};
