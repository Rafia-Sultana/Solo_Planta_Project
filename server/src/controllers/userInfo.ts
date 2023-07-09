import { Request, Response } from 'express';
import  { IUserInfo,UserInfo } from '../models/userInfo';

export const createUserInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    let { skill_level, climat, indoor_outdoor } = req.body;

    const userInfo: IUserInfo = await UserInfo.create({
      skill_level,
      climat,
      indoor_outdoor
    });

    await userInfo.save();
    res.status(200).send(userInfo);
  } catch (error) {
    console.log(error);
  }
};
export default {
    createUserInfo
}
