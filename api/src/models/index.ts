import mongoose, { Schema, mongo, Types, Document } from "mongoose";
import { v4 as uuid } from 'uuid';

interface IUser extends Document {
    id: string;
    email: string;
    password: string;
    name: string;
    avatar_url: string;
    Schedule: ISchedule[];
  }
  
  interface ISchedule extends Document {
    id: string;
    name: string;
    phone: string;
    date: Date;
    user_id: string;
    _id: mongoose.Types.ObjectId;
    users: IUser['_id'];
  }
  
  const UserSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    avatar_url: { type: String, default: '' },
    Schedule: [{ type: Schema.Types.ObjectId, ref: 'Schedule' }],
  });
  
  const ScheduleSchema = new Schema<ISchedule>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    user_id: { type: String, default: '' },
    users: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
  ScheduleSchema.set('toJSON', {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  });
  

  
  const User = mongoose.model<IUser>('User', UserSchema);
  const Schedule = mongoose.model<ISchedule>('Schedule', ScheduleSchema);
  
  export { User, Schedule };