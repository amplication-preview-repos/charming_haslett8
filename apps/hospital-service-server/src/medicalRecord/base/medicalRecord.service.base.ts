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
  MedicalRecord as PrismaMedicalRecord,
  Patient as PrismaPatient,
} from "@prisma/client";

export class MedicalRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MedicalRecordCountArgs, "select">
  ): Promise<number> {
    return this.prisma.medicalRecord.count(args);
  }

  async medicalRecords<T extends Prisma.MedicalRecordFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MedicalRecordFindManyArgs>
  ): Promise<PrismaMedicalRecord[]> {
    return this.prisma.medicalRecord.findMany<Prisma.MedicalRecordFindManyArgs>(
      args
    );
  }
  async medicalRecord<T extends Prisma.MedicalRecordFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MedicalRecordFindUniqueArgs>
  ): Promise<PrismaMedicalRecord | null> {
    return this.prisma.medicalRecord.findUnique(args);
  }
  async createMedicalRecord<T extends Prisma.MedicalRecordCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MedicalRecordCreateArgs>
  ): Promise<PrismaMedicalRecord> {
    return this.prisma.medicalRecord.create<T>(args);
  }
  async updateMedicalRecord<T extends Prisma.MedicalRecordUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MedicalRecordUpdateArgs>
  ): Promise<PrismaMedicalRecord> {
    return this.prisma.medicalRecord.update<T>(args);
  }
  async deleteMedicalRecord<T extends Prisma.MedicalRecordDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MedicalRecordDeleteArgs>
  ): Promise<PrismaMedicalRecord> {
    return this.prisma.medicalRecord.delete(args);
  }

  async getPatient(parentId: string): Promise<PrismaPatient | null> {
    return this.prisma.medicalRecord
      .findUnique({
        where: { id: parentId },
      })
      .patient();
  }
}
