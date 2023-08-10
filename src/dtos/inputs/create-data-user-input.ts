import { IsDate, IsNumber, IsObject, IsString } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class GeoLocationInput {
  @IsNumber()
  @Field()
  latitude: number;

  @IsNumber()
  @Field()
  longitude: number;
}

@InputType()
export class CreateDataUserInput {
  @IsString()
  @Field()
  ip: string;

  @IsString()
  @Field()
  slug: string;

  @IsString()
  @Field()
  currentDateTime: string;

  @IsObject()
  @Field(() => GeoLocationInput)
  geoLocation: GeoLocationInput;

  @IsString()
  @Field()
  video: string
}