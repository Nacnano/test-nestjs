import { Controller, Get, Post, Patch, Body, Param } from "@nestjs/common";
import { QaQueue } from "./qaroom.entity";
import { QaQueueService } from "./qaroom.service";

// test-typeorm/src/qaroom/qaroom.service

@Controller("qaroom")
export class QaRoomController {
  constructor(private readonly qaQueueService: QaQueueService) {}
  @Get()
  async findall(): Promise<QaQueue[]> {
    return this.qaQueueService.findall();
  }
}
