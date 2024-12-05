import mongoose, { Document, Schema } from 'mongoose'

export interface ICategory extends Document {
  name: string
  description: string
  created_at: Date
  updated_at: Date
}

const CategorySchema: Schema<ICategory> = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})

const CategoryModel =
  (mongoose.models.Category as mongoose.Model<ICategory>) ||
  mongoose.model<ICategory>('Category', CategorySchema)

export default CategoryModel
