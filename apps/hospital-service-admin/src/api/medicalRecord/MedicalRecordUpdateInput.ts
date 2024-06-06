import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type MedicalRecordUpdateInput = {
  date?: Date | null;
  details?: string | null;
  patient?: PatientWhereUniqueInput | null;
  recordType?: "Option1" | null;
};
