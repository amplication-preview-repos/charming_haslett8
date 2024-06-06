import { SortOrder } from "../../util/SortOrder";

export type MedicalRecordOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  recordType?: SortOrder;
  updatedAt?: SortOrder;
};
