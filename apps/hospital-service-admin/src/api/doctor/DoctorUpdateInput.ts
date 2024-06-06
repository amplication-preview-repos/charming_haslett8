import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type DoctorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  contactNumber?: string | null;
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  specialization?: string | null;
};
