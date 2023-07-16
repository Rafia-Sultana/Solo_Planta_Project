import mongoose from '../db';
interface IWateringLog extends mongoose.Document {
  plant_id: string;
  date: Date;
}
const wateringLogSchema = new mongoose.Schema<IWateringLog>({
  plant_id: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
const WateringLog = mongoose.model<IWateringLog>(
  'WateringLog',
  wateringLogSchema
);
export { WateringLog, IWateringLog };
