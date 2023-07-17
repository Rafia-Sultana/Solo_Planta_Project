import { Request, Response } from 'express';
import { IUserInfo, UserInfo } from '../models/userInfo';

const createUserInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    const skill_level = req.body.skillDataByUser.SkillLevel;
    const climate = req.body.climateData.climateName;
    const indoor_outdoor = req.body.singleData.siteName;
    const userId = req.body.userId;

    const userInfo: IUserInfo = await UserInfo.create({
      skill_level,
      climate,
      indoor_outdoor,
      userId,
    });
    // console.log(userInfo);

    await userInfo.save();
    res.status(200).send(userInfo);
  } catch (error) {
    console.log(error);
  }
};

const getUserInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const userDetails = await UserInfo.find({ userId: id });

    res.status(200).send(userDetails);
  } catch (error) {
    console.log(error);
  }
};
export default {
  createUserInfo,
  getUserInfo,
};
