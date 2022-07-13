import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
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

  @Get()
  async findAll() {
    throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  }
}
