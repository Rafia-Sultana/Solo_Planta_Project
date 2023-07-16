interface Plants {
  _id: string;
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
  wateringDifficulty: string,
  idealLightLevel: {
    name: string,
    minLux: number,
    maxLux: number,
    minFc: number,
    maxFc: number
  },
  toleratedLightLevel: {
    name: string,
    minLux: number,
    maxLux: number,
    minFc: number,
    maxFc: number
  },
  imgUrl: string
}


export default Plants;