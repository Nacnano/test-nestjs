import { User } from "../user.entity";

export class RoleType {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
}

export class StarType {
  id: number;
  name: string;
  color: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
export class UserDto {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  displayName: string;
  starId: string;
  comment: string;
  gender: string;
  roleId: string;
  phoneNumber: string;
  email: string;
  password: string;
  isActive: boolean;
  joinDate: string;
  createDate: Date;
  lastUpdate: Date;

  get toUserEntity(): User {
    console.log("IN");
    const newUser = new User();
    for (const key in Object.keys(UserDto)) {
      console.log(key, this[key]);
      newUser[key] = this[key];
    }
    return newUser;
  }
}
