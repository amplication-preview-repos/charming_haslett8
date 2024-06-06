import { Appointment } from "../appointment/Appointment";
import { MedicalRecord } from "../medicalRecord/MedicalRecord";

export type Patient = {
  address: string | null;
  appointments?: Array<Appointment>;
  contactNumber: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  id: string;
  medicalRecords?: Array<MedicalRecord>;
  name: string | null;
  updatedAt: Date;
};
