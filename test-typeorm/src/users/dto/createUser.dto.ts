import { IsEmail, IsNotEmpty } from "class-validator";
export class CreateUserDto {
  id: number;
  firstName: string;
  lastName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  isActive: boolean;
}
