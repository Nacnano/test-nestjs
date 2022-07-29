import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QaQueue } from "./qaroom.entity";

@Injectable()
export class QaRoomService {
  constructor(
    @InjectRepository(QaQueue)
    private qaQueueRepository: Repository<QaQueue>
  ) {}
  async create(newQueue: object) {
    return this.qaQueueRepository.save(newQueue);
  }

  async findall() {
    return this.qaQueueRepository.find();
  }

  async findOne(id: string) {
    return this.qaQueueRepository.findOneBy({ id });
  }
}
