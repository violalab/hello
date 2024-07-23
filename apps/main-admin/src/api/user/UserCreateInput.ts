import { InputJsonValue } from "../../types";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  posts?: PostWhereUniqueInput | null;
};
