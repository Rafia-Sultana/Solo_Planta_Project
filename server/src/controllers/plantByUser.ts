import { Request, Response } from 'express';
import { IPlantByUser,PlantByUser } from '../models/plantByUser';
import {Plants,IPlants} from '../models/plants';

 const createPlantByUser = async (req: Request, res: Response): Promise<void> => {
  try {
    let { user_id,site_id,plant_id,date } = req.body;
    // console.log("body", req.body);

    const plant: IPlantByUser = await PlantByUser.create({
        user_id,site_id,plant_id,date 
    });
// console.log(plant);
    await plant.save();
    res.status(200).send(plant);
  } catch (error) {
    console.log(error);
}
};


const getPlantsByUserId = async (req:Request,res:Response): Promise<void> =>{
  try {
    const {id} = req.params;
    // console.log(req.params);
    const plants = await PlantByUser.find({user_id:id});
    // console.log("plants",plants);
    res.send(plants);
  } catch (error) {
    console.log(error);
  }
}

const getPlantByName = async (req:Request,res:Response): Promise<void> =>{
  try {
    const {name} = req.params;
    console.log(req.params);
    const plants = await Plants.find({Appeal:name});
    // console.log(plants);
    res.send(plants)
    
  } catch (error) {
    console.log(error);
  }
}


export default {createPlantByUser,getPlantsByUserId,getPlantByName }