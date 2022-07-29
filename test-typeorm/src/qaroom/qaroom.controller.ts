import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { QaQueue } from "./qaroom.entity";
import { QaRoomService } from "./qaroom.service";
@Controller("qaroom")
export class QaRoomController {
  constructor(private readonly qaQueueService: QaRoomService) {}

  @Post()
  async create(@Body() newQueue: object): Promise<QaQueue> {
    return this.qaQueueService.create(newQueue);
  }
  @Get()
  async findall(): Promise<QaQueue[]> {
    return this.qaQueueService.findall();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<QaQueue> {
    return this.qaQueueService.findOne(id);
  }
}
