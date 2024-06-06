import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
