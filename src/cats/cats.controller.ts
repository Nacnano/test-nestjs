import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
  ParseIntPipe,
  Param,
} from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cats.dto";
import { CatsService } from "./cats.service";
import { HttpFilterException } from "./filter/http-exception.filter";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UseFilters(new HttpFilterException())
  async create(@Body() createCatDto: CreateCatDto) {
    throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  }

  // @Get()
  // async findOne(@Param("id", ParseIntPipe) id: number) {
  //   return this.catsService.findOne(id);
  // }

  @Get()
  async findAll() {
    throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  }
}
