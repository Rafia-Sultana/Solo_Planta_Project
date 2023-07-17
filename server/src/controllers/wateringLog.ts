import { Request, Response } from 'express';
import { WateringLog } from '../models/wateringLog';
import { PlantByUser } from '../models/plantByUser';
import { Plants } from '../models/plants';
import daysCalc from '../utils/date-helper';

const createWateringLog = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { plant_id, date: req_date } = req.body;

    const date = req_date ? req_date : new Date();

    const newWateringLog = await WateringLog.create({ plant_id, date });
    res.status(201).send(newWateringLog);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getWaterScheduleForAllPlants = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId: user_id } = req.params;
    const plants = await PlantByUser.find({ user_id });

    const schedule = [];

    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];

      const latestWateringLog = await WateringLog.findOne(
        { plant_id: plant._id },
        {},
        { sort: { date: -1 } }
      );
      const plantSpecies = await Plants.findById(plant.plant_id);
      const wateringFrequency =
        plantSpecies?.wateringDifficulty === 'Master'
          ? 1
          : plantSpecies?.wateringDifficulty === 'Experienced'
          ? 2
          : 3;

      if (latestWateringLog) {
        const today = new Date();
        const daysDiff = daysCalc(latestWateringLog.date, today);
        const days = daysDiff > wateringFrequency ? 0 : daysDiff;

        schedule.push({
          plant,
          plantSpecies,
          nextWatering: days === 0 ? 'Water today.' : days + ' day(s)',
        });
      } else
        schedule.push({
          plant,
          plantSpecies,
          nextWatering: wateringFrequency + ' day(s)',
        });
    }

    // console.log('Schedule: ', schedule);

    res.send(schedule);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default {
  createWateringLog,
  getWaterScheduleForAllPlants,
};
