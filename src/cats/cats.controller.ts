import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseInterceptors,
} from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cats.dto";
import { CatsService } from "./cats.service";
import { LoggingInterceptor } from "./interceptor/logging.interceptor";
import { User } from "./decorator/user.decorator";

@Controller("cats/dogs")
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // @Get()
  // async findOne(@Param("id", ParseIntPipe) id: number) {
  //   return this.catsService.findOne(id);
  // }

  @Get()
  findAll() {
    return "This cat";
    throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  }
  // This is the decorator part of the overview
  // @Get()
  // async findOne(@User("firstName") firstName: string) {
  //   console.log(`Hello ${firstName}`);
  // }
}
