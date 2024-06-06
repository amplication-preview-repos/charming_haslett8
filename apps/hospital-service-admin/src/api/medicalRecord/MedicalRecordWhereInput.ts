import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalRecordWhereInput = {
  date?: DateTimeNullableFilter;
  details?: StringNullableFilter;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  recordType?: "Option1";
};
