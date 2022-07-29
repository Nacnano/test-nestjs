import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { QaQueue } from "./qaroom.entity";

@Injectable()
export class QaQueueService {
  constructor(
    @InjectRepository(QaQueue)
    private qaQueueRepository: Repository<QaQueue>
  ) {}

  async findall() {
    return this.qaQueueRepository.find();
  }
}
