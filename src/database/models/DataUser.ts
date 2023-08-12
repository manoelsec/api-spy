import { Schema, model } from "mongoose";

interface DataUserAttributes {
  ip: string;
  slug: string;
  currentDateTime: string;
  geoLocation: {
    latitude: number;
    longitude: number;
  };
  video: {
    url: string;
  };
}

const kittySchema = new Schema<DataUserAttributes>({
  ip: String,
  slug: String,
  currentDateTime: String,
  geoLocation: {
    latitude: Number,
    longitude: Number,
  },
  video: {
    url: String,
  },
})

export const DataUser = model('DataUser', kittySchema);