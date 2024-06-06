import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentWhereInput = {
  date?: DateTimeNullableFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
  status?: "Option1";
  time?: StringNullableFilter;
};
