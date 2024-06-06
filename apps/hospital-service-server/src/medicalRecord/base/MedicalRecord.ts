/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Patient } from "../../patient/base/Patient";
import { EnumMedicalRecordRecordType } from "./EnumMedicalRecordRecordType";

@ObjectType()
class MedicalRecord {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  details!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Patient,
  })
  @ValidateNested()
  @Type(() => Patient)
  @IsOptional()
  patient?: Patient | null;

  @ApiProperty({
    required: false,
    enum: EnumMedicalRecordRecordType,
  })
  @IsEnum(EnumMedicalRecordRecordType)
  @IsOptional()
  @Field(() => EnumMedicalRecordRecordType, {
    nullable: true,
  })
  recordType?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { MedicalRecord as MedicalRecord };
