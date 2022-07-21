import { EntitySchema } from "typeorm";
import { User } from "./user.entity";

export const UserSchema = new EntitySchema<User>({
  name: "User",
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    userId: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    displayName: {
      type: String,
    },
    role: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createDate: {
      type: String,
    },
    lastUpdate: {
      type: String,
    },
  },
});
