import { Controller, Get, Post, Redirect, Param, Body } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUsers(): Promise<string> {
    return "add new users";
  }

  @Post("create")
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
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
    return { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" };
  }
}
