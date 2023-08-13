import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  userId: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdTs: string;
}

const UserSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  createdTs: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);

const UserModel = mongoose.model('User', UserSchema);
export { UserModel };
