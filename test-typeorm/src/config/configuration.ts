import { User } from "../users/user.entity";

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User],
    synchronize: true,
    autoLoadEntities: true,
  },
});
