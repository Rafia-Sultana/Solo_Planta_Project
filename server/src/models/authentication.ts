import mongoose from './../db';

interface IUser extends mongoose.Document {
    name:string,
  email: string;
  password: string;
  
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel;
