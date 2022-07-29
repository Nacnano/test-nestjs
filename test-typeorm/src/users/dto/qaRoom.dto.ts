export interface QaQueueType {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface QaQueue {
  id: number;
  userId: string;
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
