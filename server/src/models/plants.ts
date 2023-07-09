import mongoose from './../db';

interface IPlants extends mongoose.Document {
  _id:string,
  Latin_name: string;
  Family_name: string;
  Other_names: string;
  Common_name: string;
  Categories: string;
  Origin: string;
  maxTempCel: number;
  minTempCel?: number;
  Zone?: string;
  Growth?: string;
  Light_ideal?: string;
  Light_tolered?: string;
  Watering?: string;
  Insects?: string;
  Disease?: string;
  Appeal?: string;
  Color_Of_leaf?: string;
  Availability?: string;
  Pot_diameter?: number;
  Height_at_purchase?: number;
  Width_at_purchase?: number;
  Height_potential?: number;
  Width_potential?: number;
  Available_sizes?: String;
  Bearing?: string;
  Pruning?: string;
  Use?: string;
  Climate: string;
  idealLightLevel: {
    name: string,
    minLux: number,
    maxLux: number,
    minFc: number,
    maxFc: number
  },
  toleratedLightLevel:{
    name: string,
    minLux: number,
    maxLux: number,
    minFc: number,
    maxFc: number
  }
}

const plantsSchema = new mongoose.Schema<IPlants>({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
  },
  Latin_name: {
    type: String,
    required: true,
  },
  Family_name: {
    type: String,
    required: true,
  },
  Other_names: {
    type: String,
    required: true,
  },
  Common_name: {
    type: String,
    required: true,
  },
  Categories: {
    type: String,
    required: true,
  },
  Origin: {
    type: String,
    required: true,
  },
  maxTempCel: {
    type: Number,
    required: true,
  },
  minTempCel:  {
    type: Number,
    required: true,
  },
  wateringDifficulty:{
    type: String,
    required: true,
  },
  Zone:  {
    type: String,
    required: true,
  },
  Growth:  {
    type: String,
    required: true,
  },
  Light_ideal:  {
    type: String,
    required: true,
  },
  Light_tolered:  {
    type: String,
    required: true,
  },
  Watering: {
    type: String,
    required: true,
  },
  Insects:  {
    type: String,
    required: true,
  },
  Disease:  {
    type: String,
    required: true,
  },
  Appeal: {
    type: String,
    required: true,
  },
  Color_Of_leaf: {
    type: String,
    required: true,
  },
  Availability:  {
    type: String,
    required: true,
  },
  Pot_diameter:  {
    type: Number,
    required: true,
  },
  Height_at_purchase:  {
    type: Number,
    required: true,
  },
  Width_at_purchase:  {
    type: Number,
    required: true,
  },
  Height_potential:  {
    type: Number,
    required: true,
  },
  Width_potential:  {
    type: Number,
    required: true,
  },
  Available_sizes:  {
    type: String,
    required: true,
  },
  Bearing:  {
    type: String,
    required: true,
  },
  Pruning: {
    type: String,
    required: true,
  },
  Use: {
    type: String,
    required: true,
  },
  Climate: {
    type: String,
    required: true,
  },
  idealLightLevel: {
    type: {
      name: String,
      minLux: Number,
      maxLux: Number,
      minFc: Number,
      maxFc: Number
    }
  },
  toleratedLightLevel:{
    type: {
      name: String,
      minLux: Number,
      maxLux: Number,
      minFc: Number,
      maxFc: Number
    }
  }
});

const Plants = mongoose.model<IPlants>('Plants', plantsSchema);

export {Plants,IPlants} ;
