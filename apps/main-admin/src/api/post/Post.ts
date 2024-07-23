import { User } from "../user/User";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: User | null;
  title: string;
  description: string | null;
};
