import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DataUserModel {
  @Field()
  ip: string;


  @Field()
  slug: string;

  @Field()
  currentDateTime: string;

  @Field()
  geoLocation: string;

  @Field()
  video: string
}