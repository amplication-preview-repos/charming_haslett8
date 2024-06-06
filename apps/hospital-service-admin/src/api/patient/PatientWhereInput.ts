import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MedicalRecordListRelationFilter } from "../medicalRecord/MedicalRecordListRelationFilter";

export type PatientWhereInput = {
  address?: StringNullableFilter;
  appointments?: AppointmentListRelationFilter;
  contactNumber?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  medicalRecords?: MedicalRecordListRelationFilter;
  name?: StringNullableFilter;
};
