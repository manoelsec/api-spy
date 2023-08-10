import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AppointmentModel {
  @Field()
  title: string;

  @Field()
  slug: string;

  @Field()
  color: string;

  @Field()
  image: string;

  @Field()
  description: string;
}