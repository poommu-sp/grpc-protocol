/* eslint-disable */

export const protobufPackage = "samantra.services.trader";

export interface TraderIDPayload {
  traderID: number;
}

export interface TraderIDResponse {
  ID: number;
  code: string;
  nameShort: string;
  nameEN: string;
  nameTH: string;
  status: number;
  type: string;
  isCPT: boolean;
  isDeal: boolean;
}

export interface TraderService {
  TraderID(request: TraderIDPayload): Promise<TraderIDResponse>;
}
