export enum QaQueueTypeList {
  seeStaff = "seeStaff",
  askQuestion = "askQuestion",
  checkWork = "checkWork",
  newSheet = "newSheet",
  oralTest = "oralTest",
  clearFolder = "clearFolder",
}

console.log(Object.keys(QaQueueTypeList));

export const QaQueueTypeDto = {
  id: {
    type: String,
    enum: Object.keys(QaQueueTypeList),
  },
  description: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date,
};

export const QaQueueDto = {
  id: String,
  userId: String,
  queueTypeId: String,
  sheetId: String,
  comment: String,
  isActive: Boolean,
  queueCreatedAt: Date,
  queueUpdatedAt: Date,
  linkUrl: String,
  sederUserId: String,
  sendMessage: String,
  sendCreatedAt: Date,
  sendUpdatedAt: Date,
  deleterUserId: String,
  deleteMessage: String,
  deleteCreatedAt: Date,
  deleteUpdatedAt: Date,
};

// export interface QaAction {
//   id: String;
//   typeId: String;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface QaActionType {
//   id: String;
//   name: String;
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
