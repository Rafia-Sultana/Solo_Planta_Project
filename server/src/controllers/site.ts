import { Request, Response } from 'express';
import  { ISite,Site } from '../models/site';

 const createSite = async (req: Request, res: Response): Promise<void> => {
  try {
    let { name,light } = req.body;

    const site: ISite = await Site.create({
        name,light 
    });

    await site.save();
    res.status(200).send(site);
  } catch (error) {
    console.log(error);
  }
};
export default {
    createSite
}
