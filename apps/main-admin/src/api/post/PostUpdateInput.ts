import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  userId?: UserWhereUniqueInput | null;
  title?: string;
  description?: string | null;
};
