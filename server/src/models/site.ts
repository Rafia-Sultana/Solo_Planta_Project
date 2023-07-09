import mongoose from './../db';

interface ISite extends mongoose.Document {
    name: string;
    light: string;
    
  
}

const siteSchema = new mongoose.Schema<ISite>({
    name: {
        type: String,
        required: true,
      },
      light: {
        type: String,
        required: true,
      },
});

const Site = mongoose.model<ISite>('Site', siteSchema);

export { ISite, Site };
