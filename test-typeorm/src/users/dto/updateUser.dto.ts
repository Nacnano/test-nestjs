import { IsEmail, IsNotEmpty } from "class-validator";

export class UpdateUserDto {
  id?: number;
  firstName?: string;
  lastName?: string;

  @IsEmail()
  email?: string;

  @IsNotEmpty()
  password?: string;

  isActive?: string;
}
