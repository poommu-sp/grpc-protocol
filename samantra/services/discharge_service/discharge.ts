/* eslint-disable */
import type { Plant } from "../master_service/master";

export const protobufPackage = "samantra.services.discharge";

export interface ListDischargePayload {
  RequestDate: Date | undefined;
}

export interface ListDischargeResponse {
  ListDischarge: DischargeItem[];
}

export interface DischargeItem {
  LotNO: string;
  ProductCode: string;
  Plant: Plant | undefined;
  QuotaWGH: number;
}

export interface Discharge {
  ListDischarge(request: ListDischargePayload): Promise<ListDischargeResponse>;
}
