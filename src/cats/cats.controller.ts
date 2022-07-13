import { Controller, Get, Post, Body, Res, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { CreateCatDto } from "./dto/create-cats.dto";

@Controller("cats")
export class CatsController {
  @Post()
  create(@Body() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK).json([]);
  }
}
