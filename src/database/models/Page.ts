import { Schema, model } from "mongoose";

interface PageAttributes {
  title: string;
  slug: string;
  color: string;
  image: string;
  description: string;
}

const kittySchema = new Schema<PageAttributes>({
  title: String,
  slug: { type: String, unique: true },
  color: String,
  image: String,
  description: String,
})

export const Page = model('Page', kittySchema);