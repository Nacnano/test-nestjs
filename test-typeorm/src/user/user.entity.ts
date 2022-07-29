import { IsPhoneNumber } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

const date_now = new Date().toISOString().slice(0, 19).replace("T", " ");

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  userName: string;

  @Column({ default: "Set Display Name" })
  displayName: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ default: "student" })
  roleId: string;

  @Column({ nullable: true })
  @IsPhoneNumber()
  phoneNumber: string;

  @Column({ default: "example@nacnano.com" })
  email: string;

  @Column({ default: "password" })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: date_now })
  joinDate: Date;

  @Column({ default: date_now })
  createDate: Date;

  @Column({ default: date_now })
  updateDate: Date;

  @Column({ type: "json", nullable: true })
  profilePicture: { url: string; width: number; height: number };
}
