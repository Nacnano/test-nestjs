import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./user/user.module";
import { User } from "./user/user.entity";
import { ConfigModule } from "@nestjs/config";
import { QaQueue } from "./qaroom/qaroom.entity";
import { MainController } from "./main.controller";
import { QaRoomModule } from "./qaroom/qaroom.module";
ConfigModule.forRoot({ envFilePath: ".env" });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, QaQueue],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    QaRoomModule,
  ],
  controllers: [MainController],
})
export class AppModule {}
