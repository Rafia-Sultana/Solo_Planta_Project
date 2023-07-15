import { Request, Response } from 'express';
import { ISite, Site } from '../models/site';

const createSite = async (req: Request, res: Response): Promise<void> => {
  try {
    let { previous, temperature, volume, userId } = req.body;
    // console.log(req.body);
    // let {image,name} = previous;
    // let {maxValue,minValue}=temparature;

    const site: ISite = await Site.create({
      previous,
      volume,
      temperature,
      userId,
    });

    await site.save();
    res.status(200).send(site);
  } catch (error) {
    console.log(error);
  }
};

const getSite = async (req: Request, res: Response): Promise<void> => {
  try {
    const allSite = await Site.find({});
    res.status(200).send(allSite);
  } catch (error) {
    console.log(error);
  }
};

// const getSiteByUserId = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const getSiteByUser = await Site.find({ id });
//     console.log(getSiteByUser);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default {
  createSite,
  getSite,
};
