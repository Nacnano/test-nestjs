export interface QaQueueType {
  id: number;
  typeId: string;
  typeName: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// export interface QaActionType {
//   id: number;
//   typeId: string;
//   typeName: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface QaSentQueue {
  id: number;
  queueId: string;
  userId: string;
  queueType: string;
  sheetId: string;
  comment: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// export interface QaAction {
//   id: number;
//   actionId: string;
//   typeId: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface QaSendLink {
  id: number;
  ActionId: string;
  linkUrl: string;
  senderName: string;
  message: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface QaDeleteQueue {
  id: number;
  deleteId: string;
  deletedQueueId: string;
  deleterName: string;
  message: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
