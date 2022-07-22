import { User } from "../user.entity";

export class RoleType {
  id: number;
  roleId: string;
  roleName: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
}

export class StarType {
  id: number;
  starId: number;
  starName: string;
  starColor: string;
  starDescription: string;
  createdAt: Date;
  updatedAt: Date;
}
export class UserDto {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  displayName: string;
  starId: string;
  comment: string;
  gender: string;
  role: string;
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
