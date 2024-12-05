import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  username: string
  password: string
  email: string
  is_verified: boolean
  created_at: Date
  is_accepting_messages: boolean
}

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  is_verified: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  is_accepting_messages: { type: Boolean, default: true },
})

const UserModel =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>('User', UserSchema)

export default UserModel
