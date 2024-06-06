/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Appointment as PrismaAppointment,
  Doctor as PrismaDoctor,
  Patient as PrismaPatient,
} from "@prisma/client";

export class AppointmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AppointmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.appointment.count(args);
  }

  async appointments<T extends Prisma.AppointmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppointmentFindManyArgs>
  ): Promise<PrismaAppointment[]> {
    return this.prisma.appointment.findMany<Prisma.AppointmentFindManyArgs>(
      args
    );
  }
  async appointment<T extends Prisma.AppointmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppointmentFindUniqueArgs>
  ): Promise<PrismaAppointment | null> {
    return this.prisma.appointment.findUnique(args);
  }
  async createAppointment<T extends Prisma.AppointmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppointmentCreateArgs>
  ): Promise<PrismaAppointment> {
    return this.prisma.appointment.create<T>(args);
  }
  async updateAppointment<T extends Prisma.AppointmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppointmentUpdateArgs>
  ): Promise<PrismaAppointment> {
    return this.prisma.appointment.update<T>(args);
  }
  async deleteAppointment<T extends Prisma.AppointmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AppointmentDeleteArgs>
  ): Promise<PrismaAppointment> {
    return this.prisma.appointment.delete(args);
  }

  async getDoctor(parentId: string): Promise<PrismaDoctor | null> {
    return this.prisma.appointment
      .findUnique({
        where: { id: parentId },
      })
      .doctor();
  }

  async getPatient(parentId: string): Promise<PrismaPatient | null> {
    return this.prisma.appointment
      .findUnique({
        where: { id: parentId },
      })
      .patient();
  }
}
