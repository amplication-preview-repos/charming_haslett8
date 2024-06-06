import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  status?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
