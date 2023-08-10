import { Schema, model } from "mongoose";

interface DataUserAttributes {
  ip: string;
  slug: string;
  currentDateTime: string;
  geoLocation: string;
  video: string;
}

const kittySchema = new Schema<DataUserAttributes>({
  ip: String,
  slug: String,
  currentDateTime: String,
  geoLocation: String,
  video: String,
})

export const DataUser = model('DataUser', kittySchema);