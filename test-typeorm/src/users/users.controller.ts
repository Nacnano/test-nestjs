import { Controller, Get, Post, Redirect, Param, Body } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  @Post()
  async addUsers(): Promise<string> {
    return "add new users";
  }

  @Post("create")
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.UsersService.createUser(createUserDto);
  }

  @Get()
  async getUsers(): Promise<string> {
    return "get new users";
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<string> {
    console.log(id);
    return ` #${id} users`;
  }

  @Get("test")
  @Redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  async redirect() {
    return { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"};
  }
}
