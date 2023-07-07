import mongoose, { ConnectionOptions } from 'mongoose';
const DB_PORT:string | number = process.env.DB_PORT || 27017;
const DB_NAME:string = process.env.DB_NAME || 'authenticate';
mongoose.set('strictQuery', false);

const options:ConnectionOptions ={
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
mongoose.connect(
  `mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}`,
 options,
  (err:any) => {
    if (err) {
      console.log(`😞 Sorry, something went wrong!.... ${err}`); // eslint-disable-line no-console
    } else {
      console.log(`🦆 Database (JWT) connected @ port ${DB_PORT}!`); // eslint-disable-line no-console
    }
  }
);

export default mongoose;