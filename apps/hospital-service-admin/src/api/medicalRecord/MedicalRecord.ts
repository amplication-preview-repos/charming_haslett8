import { Patient } from "../patient/Patient";

export type MedicalRecord = {
  createdAt: Date;
  date: Date | null;
  details: string | null;
  id: string;
  patient?: Patient | null;
  recordType?: "Option1" | null;
  updatedAt: Date;
};
