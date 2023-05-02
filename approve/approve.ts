/* eslint-disable */

export const protobufPackage = "approve";

export interface Empty {
}

export interface InitApprovalOperationListRequest {
  id: string;
  menu: string;
}

export interface InitApprovalOperationListResponse {
  nextRoles: string[];
}

export interface ApproveRequest {
  id: string;
  menu: string;
}

export interface ApproveResponse {
  completed: boolean;
  nextRoles: string[];
}

export interface RejectRequest {
  id: string;
  menu: string;
  remark: string;
}

export interface AcknowledgeResponse {
  nextRoles: string[];
}

export interface ApprovalOperationListByMenuRequest {
  menu: string;
}

export interface ApprovalOperationListByMenuResponse {
  ApprovalOperationListByMenu: ApprovalOperation[];
}

export interface ApprovalOperation {
  ID: number;
  DocumentId: string;
  Menu: string;
  Role: string;
  ApprovalType: string;
  IsChildRole: boolean;
  ApprovedBy: string;
  ApprovedAt: Date | undefined;
}

export interface ApproveEventRequest {
  menu: string;
}

export interface ApproveEventResponse {
  ApproveEventList: ApproveEvent[];
  ApproveOutsideReceiver: ApproveOutsideReceiver | undefined;
}

export interface ApproveEvent {
  ID: number;
  Role: string;
  EffectiveDate: Date | undefined;
  Menu: string;
  Type: string;
  Level: number;
  IsChildRole: boolean;
  UserID: string[];
}

export interface ApproveOutsideReceiver {
  ID: number;
  Menu: string;
  UserID: string[];
  ApproveEffectiveDatedAt: Date | undefined;
}

export interface Approve {
  InitApprovalOperationList(request: InitApprovalOperationListRequest): Promise<InitApprovalOperationListResponse>;
  RollbackInitApprovalOperationList(request: InitApprovalOperationListRequest): Promise<Empty>;
  Approve(request: ApproveRequest): Promise<ApproveResponse>;
  Acknowledge(request: ApproveRequest): Promise<AcknowledgeResponse>;
  Reject(request: RejectRequest): Promise<Empty>;
  RollbackApprovalOperation(request: ApproveRequest): Promise<Empty>;
  ApprovalOperationListByMenu(
    request: ApprovalOperationListByMenuRequest,
  ): Promise<ApprovalOperationListByMenuResponse>;
  GetCurrentApprovalEvent(request: ApproveEventRequest): Promise<ApproveEventResponse>;
}
