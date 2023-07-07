import { Request, Response, NextFunction } from 'express';
import { getSession } from '../statelessSession';

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.cookies.accessToken;
  if (!token) {
    res.status(400).send('!unauthenticated');
    return;
  }

  const existingSession = getSession(token);
  if (!existingSession) {
    res.status(400).send('!session does not exist');
    return;
  }

  next();
};

export default authMiddleware;
