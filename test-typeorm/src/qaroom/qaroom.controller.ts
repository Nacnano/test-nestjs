import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { QaQueue } from "./qaroom.entity";
import { QaQueueDto } from "./qaRoom.dto";
import { QaRoomService } from "./qaroom.service";
@Controller("qaroom")
export class QaRoomController {
  constructor(private readonly qaQueueService: QaRoomService) {}

  @Post()
  // Without the use of DTO
  // async create(@Body() newQueue: object): Promise<QaQueue> {
  //   return this.qaQueueService.create(newQueue);
  // }
  async create(@Body() newQueue: QaQueueDto): Promise<QaQueue> {
    return this.qaQueueService.create(newQueue);
  }

  @Post("update")
  async update(@Body() updateQueue: QaQueueDto): Promise<any> {
    return this.qaQueueService.update(updateQueue.id, updateQueue);
  }

  @Get()
  async findall(): Promise<QaQueue[]> {
    return this.qaQueueService.findall();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<any> {
    const queue = await this.qaQueueService.findOne(id);
    return queue ? queue : "Queue not found";
  }
}
