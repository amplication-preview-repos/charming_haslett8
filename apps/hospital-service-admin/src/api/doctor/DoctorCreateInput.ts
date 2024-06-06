import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type DoctorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  contactNumber?: string | null;
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  specialization?: string | null;
};
