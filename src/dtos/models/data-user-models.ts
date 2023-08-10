import { IsNumber } from "class-validator";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class GeoLocation {
  @Field()
  latitude: number;

  @Field()
  longitude: number;
}

@ObjectType()
export class DataUserModel {
  @Field()
  ip: string;

  @Field()
  slug: string;

  @Field()
  currentDateTime: string;

  @Field()
  geoLocation: GeoLocation;

  @Field()
  video: string
}