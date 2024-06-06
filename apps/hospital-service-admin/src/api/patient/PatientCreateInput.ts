import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";
import { MedicalRecordCreateNestedManyWithoutPatientsInput } from "./MedicalRecordCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  contactNumber?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientsInput;
  name?: string | null;
};
