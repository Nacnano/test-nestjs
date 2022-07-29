import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QaQueueDto } from "./qaRoom.dto";
import { QaQueue } from "./qaroom.entity";

@Injectable()
export class QaRoomService {
  constructor(
    @InjectRepository(QaQueue)
    private qaQueueRepository: Repository<QaQueue>
  ) {}
  //Without the use of DTO
  // async create(newQueue: object) {
  //   return this.qaQueueRepository.save(newQueue);
  // }
  async create(queueData: QaQueueDto) {
    const newQueue = new QaQueue();
    newQueue.id = queueData.id;
    newQueue.user = queueData.userId;
    newQueue.queueTypeId = queueData.queueTypeId;
    newQueue.sheetId = queueData.sheetId;
    newQueue.comment = queueData.comment;
    newQueue.isActive = queueData.isActive;
    newQueue.queueCreatedAt = queueData.queueCreatedAt;
    newQueue.queueUpdatedAt = queueData.queueUpdatedAt;
    return this.qaQueueRepository.save(newQueue);
  }

  async findall() {
    return this.qaQueueRepository.find();
  }

  async findOne(id: string) {
    return this.qaQueueRepository.findOneBy({ id });
  }
}
