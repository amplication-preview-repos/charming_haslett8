import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
  status?: "Option1" | null;
  time?: string | null;
};
