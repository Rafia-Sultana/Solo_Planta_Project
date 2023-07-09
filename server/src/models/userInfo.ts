import mongoose from './../db';

interface IUserInfo extends mongoose.Document {
    skill_level: string;
    climate: string;
    indoor_outdoor: string;
  
}

const userInfoSchema = new mongoose.Schema<IUserInfo>({
    skill_level: {
        type: String,
        required: true,
      },
      climate: {
        type: String,
        required: true,
      },
      indoor_outdoor: {
        type: String,
        required: true,
      },
});

const UserInfo = mongoose.model<IUserInfo>('UserInfo', userInfoSchema);

export { IUserInfo, UserInfo };
