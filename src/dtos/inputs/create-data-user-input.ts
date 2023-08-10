import { IsDate, IsNumber, IsObject, IsString } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";

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

  @IsString()
  @Field()
  geoLocation: string;

  @IsString()
  @Field()
  video: string
}