import {
  Controller,
  Get,
  Post,
  Redirect,
  Param,
  Body,
  Delete,
  Patch,
} from "@nestjs/common";
import { UserDto } from "../dto/user.dto";
import { UserService } from "./user.service";
import { User } from "./user.entity";

// @Controller()
// export class MainController {
//   @Get()
//   @Redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
//   async redirect(): Promise<object> {
//     return { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" };
//   }
// }

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Patch()
  async update(@Body() updateUserDto: UserDto): Promise<User> {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    console.log("Findall");
    return this.userService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<any> {
    console.log(id);
    const foundUser = await this.userService.findOne(id);
    return foundUser ? foundUser : "User not found";
  }

  @Delete(":id")
  async remove(@Param("id") id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
