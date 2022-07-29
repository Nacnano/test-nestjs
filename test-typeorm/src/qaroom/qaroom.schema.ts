import { EntitySchema } from "typeorm";
import { QaQueue } from "./qaroom.entity";

export const QaRoomSchema = new EntitySchema<QaQueue>({
  name: "QaQueue",
  target: QaQueue,
  columns: {
    id: {
      type: String,
      primary: true,
      generated: true,
    },
    userId: {
      type: String,
    },
    queueTypeId: {
      type: String,
    },
    sheetId: {
      type: String,
    },
    comment: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
    queueCreatedAt: {
      type: Date,
    },
    queueUpdatedAt: {
      type: Date,
    },
  },
});
