export class CreateUserDto {
  id: number;
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  role: string;
  email: string;
  password: string;
  isActive: boolean;
  createDate: string;
  lastUpdate: string;
}
