import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

const date_now = new Date().toISOString().slice(0, 19).replace("T", " ");

@Entity()
export class QaQueue {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  userId: string;

  @Column()
  queueTypeId: string;

  @Column()
  sheetId: string;

  @Column()
  comment: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: date_now })
  queueCreatedAt: Date;

  @Column({ default: date_now })
  queueUpdatedAt: Date;
}
