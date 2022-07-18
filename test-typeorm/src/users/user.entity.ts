import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: "example@nacnano.com" })
  email: string;

  @Column({ default: "password" })
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
