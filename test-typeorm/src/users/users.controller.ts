import {
  Controller,
  Get,
  Post,
  Redirect,
  Param,
  Body,
  Delete,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async getUsers(): Promise<string> {
    console.log("GET user");
    return "get new users";
  }

  @Get("findall")
  async findAll(): Promise<User[]> {
    console.log("findall");
    return this.usersService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<User> {
    console.log(id);
    return this.usersService.findOne(id);
  }

  @Get("test")
  @Redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  async redirect() {
    return { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" };
  }

  @Delete(":id")
  async remove(@Param("id") id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
