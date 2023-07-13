import mongoose from './../db';

interface IPlantByUser extends mongoose.Document {
    user_id:string,
    site_id:string,
    plant_id:string,
    date:string
}

const userPlantSchema = new mongoose.Schema<IPlantByUser>({
    user_id: {
        type: String,
    
      },
      site_id: {
        type: String,
    
      },
      plant_id: {
        type: String,
    
      },
      date: {
        type: String,
       
      },

});

const PlantByUser = mongoose.model<IPlantByUser>('PlantByUser', userPlantSchema);

export { IPlantByUser, PlantByUser };
