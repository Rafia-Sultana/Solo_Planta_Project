import { Request, Response } from 'express';
import { IPlantByUser, PlantByUser } from '../models/plantByUser';
import { Plants, IPlants } from '../models/plants';

const createPlantByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let {
      profileId: user_id,
      singleSiteId: site_id,
      plantId: plant_id,
      selectedDate: date,
    } = req.body;
    // console.log('body', req.body);

    // const plantInfo = await Plants.findOne({ _id: plant_id });
    // console.log('plantInfo', plantInfo);

    const plant: IPlantByUser = await PlantByUser.create({
      user_id,
      site_id,
      plant_id,
      date,
    });
    // console.log(plant);
    await plant.save();
    res.status(200).send(plant);
  } catch (error) {
    console.log(error);
  }
};

const getPlantsByUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const plants = await PlantByUser.find({});
    res.send(plants);
  } catch (error) {
    console.log(error);
  }
};

const getPlantsByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    // console.log(req.params);
    const plants = await PlantByUser.find({ user_id: id });
    // console.log("plants",plants);
    res.send(plants);
  } catch (error) {
    console.log(error);
  }
};

const getPlantByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.params;
    // console.log(req.params);
    const plants = await Plants.find({ Appeal: name });
    // console.log(plants);
    res.send(plants);
  } catch (error) {
    console.log(error);
  }
};

const plantByFilter = async (req: Request, res: Response): Promise<void> => {
  try {
    const { difficulty, growth, color } = req.body;
    // console.log(req.body);
    const plants = await Plants.find({
      wateringDifficulty: { $regex: difficulty, $options: 'i' },
      Growth: { $regex: growth, $options: 'i' },
      Color_of_leaf: { $regex: color, $options: 'i' },
    });
    // console.log(plants);
    res.send(plants);
  } catch (error) {
    console.log(error);
  }
};

export default {
  createPlantByUser,
  getPlantsByUserId,
  getPlantByName,
  getPlantsByUser,
  plantByFilter,
};
