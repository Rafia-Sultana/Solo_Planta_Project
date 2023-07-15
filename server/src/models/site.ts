import mongoose from './../db';

interface ISite extends mongoose.Document {
  previous: {
    name: string;
    image: string;
  };
  volume: number;
  temparature: {
    maxValue: number;
    minValue: number;
  };
  userId: {
    profileId: string;
  };
}

const siteSchema = new mongoose.Schema<ISite>({
  previous: {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  volume: { type: Number, required: true },
  temperature: {
    minValue: { type: Number, required: true },
    maxValue: { type: Number, required: true },
  },
  userId: {
    profileId: { type: String, required: true },
  },
});

const Site = mongoose.model<ISite>('Site', siteSchema);

export { ISite, Site };
