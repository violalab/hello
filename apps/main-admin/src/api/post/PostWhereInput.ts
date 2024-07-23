import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PostWhereInput = {
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
  title?: StringFilter;
  description?: StringNullableFilter;
};
