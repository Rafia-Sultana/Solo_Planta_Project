import {Plants,IPlants} from "../models/plants";
import { Request, Response } from 'express';


//  const createPlantByUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     let { user_id,site_id,plant_id,date } = req.body;

//     const plant: IPlants = await Plants.create({
//         user_id,site_id,plant_id,date 
//     });

//     await plant.save();
//     res.status(200).send(plant);
//   } catch (error) {
//     console.log(error);
// }
// };

const addPlant = async (req: Request, res: Response) => {
    try {
        const {Latin_name, Family_name} = req.body;
        console.log(req.body);
        const plant = await Plants.create({Latin_name, Family_name});
        res.status(201).send(plant);
    } catch (error) {
        console.log(error);
    }
}

const getAllPlants = async (req: Request, res: Response) => {
	try {

		const plants = await Plants.find({});
    res.send(plants);
	} catch (error) {
		console.log(error);
	}
};
const getPlantById = async (req: Request, res: Response) => {
	try {
      const { id } = req.params;
      const plant = await Plants.find({_id:id});  
      console.log(plant);
		res.send(plant);
	} catch (error) {
		console.log(error);
	}
};
const removePlantById = async (plantId: string) => {
    try {
      const removedPlant = await Plants.findByIdAndRemove(plantId);
      if (!removedPlant) {
        // Plant with the specified ID not found
        console.log('Plant not found');
        return;
      }
      console.log('Plant removed:', removedPlant);
    } catch (error) {
      console.error('Error removing plant:', error);
    }
  };

  const searchPlantByName = async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const plant = await Plants.find({Common_name: {"$regex": name, "$options": "i"}})
  
      if (!plant) {
        res.send('Plant not found.');
        return;
      }

      res.send(plant);
      
    } catch (error) {
      console.error('Error searching plant:', error);
    }
  };
  export default {
    addPlant,getAllPlants,getPlantById,removePlantById,searchPlantByName
  }
  
 
  
  
 
  