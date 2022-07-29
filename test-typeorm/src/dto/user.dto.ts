import { User } from "../user/user.entity";

export class RoleType {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class StarType {
  id: string;
  name: string;
  color: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
export class UserDto {
  id: string;
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
  joinDate: Date;
  createDate: Date;
  lastUpdate: Date;
  profilePicture: object;

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
