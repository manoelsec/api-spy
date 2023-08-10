import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { DataUserModel } from "../dtos/models/data-user-models";
import { CreateDataUserInput } from "../dtos/inputs/create-data-user-input";

@Resolver(() => DataUserModel)
export class DataUserResolver {
  @Query(() => DataUserModel)
  async dataUser() {
    const dataUser = {
      ip: "2198012e",
      slug: "lkf-ffnfm",
      currentDateTime: "dhhflkbf",
      geoLocation: "dkjflhkjfhglkjg",
      video: "odhfjhkf",
    }

    return dataUser
  }
  @Mutation(() => DataUserModel)
  async createDataUser(@Arg('data') data: CreateDataUserInput) {
    const dataUser = {
      ip: data.ip,
      slug: data.slug,
      currentDateTime: data.currentDateTime,
      geoLocation: data.geoLocation,
      video: data.video,
    }

    return dataUser;
  }
}