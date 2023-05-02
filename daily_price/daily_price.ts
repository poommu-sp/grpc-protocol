/* eslint-disable */

export const protobufPackage = "daily_price";

export interface Empty {
}

export interface GetByIdRequest {
  id: string;
}

export interface GetByIdResponse {
  dailyPriceDocument: DailyPriceDocument | undefined;
}

export interface ApproveAndFreezeRequest {
  id: string;
}

export interface DailyPriceDocument {
  id: string;
  createdAt: Date | undefined;
  createdBy: string;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
  updatedBy: string;
  no: string;
  effectiveDate: Date | undefined;
  WinfeedDivision: WinfeedDivision | undefined;
  status: number;
}

export interface WinfeedDivision {
  id: number;
  name: string;
  countryAlpha3: string;
  countryName: string;
  code: string;
}

export interface RejectRequest {
  id: string;
}

export interface DailyPrice {
  GetById(request: GetByIdRequest): Promise<GetByIdResponse>;
  ApproveAndFreeze(request: ApproveAndFreezeRequest): Promise<Empty>;
  RollbackApproveAndFreeze(request: ApproveAndFreezeRequest): Promise<Empty>;
  Reject(request: RejectRequest): Promise<Empty>;
  RollbackReject(request: RejectRequest): Promise<Empty>;
  SendVietnamMsgById(request: GetByIdRequest): Promise<Empty>;
}
