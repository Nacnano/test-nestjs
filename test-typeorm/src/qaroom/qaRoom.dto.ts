import { User } from "src/user/user.entity";

export enum QaQueueTypeList {
  seeStaff = "seeStaff",
  askQuestion = "askQuestion",
  checkWork = "checkWork",
  newSheet = "newSheet",
  oralTest = "oralTest",
  clearFolder = "clearFolder",
}

console.log(Object.keys(QaQueueTypeList));

export class QaQueueTypeDto {
  id: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class QaQueueDto {
  id: string;
  userId: User;
  queueTypeId: string;
  sheetId: string;
  comment: string;
  isActive: boolean;
  queueCreatedAt: Date;
  queueUpdatedAt: Date;
  linkUrl: string;
  sederUserId: string;
  sendMessage: string;
  sendCreatedAt: Date;
  sendUpdatedAt: Date;
  deleterUserId: string;
  deleteMessage: string;
  deleteCreatedAt: Date;
  deleteUpdatedAt: Date;
}

// export interface QaAction {
//   id: string;
//   typeId: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface QaActionType {
//   id: string;
//   name: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// these two are already merged with QaQueue
// export interface QaSendLink {
//   id: string;
//   linkUrl: string;
//   senderName: string;
//   message: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface QaDeleteQueue {
//   id: string;
//   deletedQueueId: string;
//   deleterName: string;
//   message: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }
