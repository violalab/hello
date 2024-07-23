import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  userId?: UserWhereUniqueInput | null;
  title: string;
  description?: string | null;
};
