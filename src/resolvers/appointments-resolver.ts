import { Mutation, Query, Resolver, Arg, FieldResolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { AppointmentModel } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";
import { Page } from "../database/models/Page";
import { DataUserModel } from "../dtos/models/data-user-models";

@Resolver(() => AppointmentModel)
export class AppointmentsResolver {
  @Query(() => AppointmentModel)
  async appointments(@Arg('slug') slug: string) {
    const page = await Page.findOne({ slug: slug });

    if (!page) { throw new Error("Page not found"); }

    const appointment = {
      title: page.title,
      slug: page.slug,
      color: page.color,
      image: page.image,
      description: page.description,
    }

    return appointment
  }

  @Query(() => [AppointmentModel])
  async appointmentsAll() {
    const page = await Page.find();

    if (!page) { throw new Error("Page not found") }

    console.log(page)

    const appointments = page.map((item) => {
      return {
        title: item.title,
        slug: item.slug,
        color: item.color,
        image: item.image,
        description: item.description,
      }
    })

    return appointments
  }

  @Mutation(() => AppointmentModel)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const existingPage = await Page.findOne({ slug: data.slug });

    if (existingPage) {
      throw new Error("Slug is already in use");
    }

    const appointment = {
      title: data.title,
      slug: data.slug,
      color: data.color,
      image: data.image,
      description: data.description,
    }

    const page = new Page(appointment);

    try {
      await page.save();
      console.log('Page created');

    } catch (err) {
      console.log(err);
    }

    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: AppointmentModel) {
    console.log(appointment)
    return {
      name: 'John Doe'
    }
  }
}