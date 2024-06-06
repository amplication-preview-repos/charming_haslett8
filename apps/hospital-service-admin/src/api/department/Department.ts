import { Doctor } from "../doctor/Doctor";

export type Department = {
  createdAt: Date;
  description: string | null;
  doctors?: Array<Doctor>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
