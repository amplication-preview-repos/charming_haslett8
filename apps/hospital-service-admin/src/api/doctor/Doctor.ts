import { Appointment } from "../appointment/Appointment";
import { Department } from "../department/Department";

export type Doctor = {
  appointments?: Array<Appointment>;
  contactNumber: string | null;
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  id: string;
  name: string | null;
  specialization: string | null;
  updatedAt: Date;
};
