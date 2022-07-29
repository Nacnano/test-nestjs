export enum QaQueueTypeList {
  seeStaff = "seeStaff",
  askQuestion = "askQuestion",
  checkWork = "checkWork",
  newSheet = "newSheet",
  oralTest = "oralTest",
  clearFolder = "clearFolder",
}

console.log(Object.keys(QaQueueTypeList));

export const QaQueueType = {
  id: Object.keys(QaQueueTypeList),
  description: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date,
};

export const QaQueue = {
  id: Number,
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
//   id: number;
//   actionId: string;
//   typeId: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export interface QaActionType {
//   id: number;
//   Id: string;
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
