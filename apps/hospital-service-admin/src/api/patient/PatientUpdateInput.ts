import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";
import { MedicalRecordUpdateManyWithoutPatientsInput } from "./MedicalRecordUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  contactNumber?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  medicalRecords?: MedicalRecordUpdateManyWithoutPatientsInput;
  name?: string | null;
};
