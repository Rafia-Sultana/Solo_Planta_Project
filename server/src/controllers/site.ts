import { Request, Response } from 'express';
import  { ISite,Site } from '../models/site';

 const createSite = async (req: Request, res: Response): Promise<void> => {
  try {
  
    let { previous,temperature,volume } = req.body;
    // let {image,name} = previous;
    // let {maxValue,minValue}=temparature;
  

    const site: ISite = await Site.create({
      previous,volume ,temperature,
    });

    await site.save();
    res.status(200).send(site);
  } catch (error) {
    console.log(error);
  }
};

const getSite = async (req:Request,res:Response) : Promise<void> =>{
  try {
    const allSite = await Site.find({});
    res.status(200).send(allSite)
    
    
  } catch (error) {
    console.log(error);
  }
}




export default {
    createSite,getSite 
}
