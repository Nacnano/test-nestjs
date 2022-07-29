import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QaRoomController } from "./qaroom.controller";
import { QaQueue } from "./qaroom.entity";
import { QaRoomService } from "./qaroom.service";

@Module({
  imports: [TypeOrmModule.forFeature([QaQueue])],
  providers: [QaRoomService],
  controllers: [QaRoomController],
})
export class QaRoomModule {}
