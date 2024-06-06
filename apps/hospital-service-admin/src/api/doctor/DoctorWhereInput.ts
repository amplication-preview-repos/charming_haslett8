import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DoctorWhereInput = {
  appointments?: AppointmentListRelationFilter;
  contactNumber?: StringNullableFilter;
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  specialization?: StringNullableFilter;
};
