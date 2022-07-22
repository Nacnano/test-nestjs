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

  toUserEntity(): User {
    const newUser = new User();
    for (const key in UserDto) {
      console.log(key);
    }
    return newUser;
  }
}
