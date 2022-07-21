import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  displayName: string;

  @Column()
  role: string;

  @Column({ default: "example@nacnano.com" })
  email: string;

  @Column({ default: "password" })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  createDate: string;

  @Column()
  updateDate: string;

  @Column({ type: "json" })
  profilePicture: { url: string; width: number; height: number };
}
