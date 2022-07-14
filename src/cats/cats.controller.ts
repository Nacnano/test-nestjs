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
  UseGuards,
  SetMetadata,
} from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cats.dto";
import { CatsService } from "./cats.service";
import { HttpFilterException } from "./filter/http-exception.filter";
import { RolesGuard } from "./guard/roles.guard";

@Controller("cats")
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @SetMetadata("roles", ["admin"])
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
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
