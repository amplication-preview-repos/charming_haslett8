import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  address?: SortOrder;
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
