import {
  Controller,
  Get,
  Post,
  Redirect,
  Param,
  Body,
  Delete,
} from "@nestjs/common";
import { UserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Controller()
export class MainController {
  @Get()
  @Redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  async redirect(): Promise<object> {
    return { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" };
  }
}
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: UserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    console.log("Findall");
    return this.usersService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<any> {
    console.log(id);
    const foundUser = await this.usersService.findOne(id);
    return foundUser ? foundUser : "User not found";
  }

  @Delete(":id")
  async remove(@Param("id") id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
