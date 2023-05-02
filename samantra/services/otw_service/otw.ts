/* eslint-disable */

export const protobufPackage = "samantra.services.otw";

export interface ListOTWPayload {
  RequestDate: Date | undefined;
}

export interface ListOTWResponse {
  ListOTW: OTWItem[];
}

export interface OTWItem {
  ProductCode: string;
  ProductName: string;
  Operation: string;
  SubOperation: string;
  FromLocation: string;
  FromLocationPlantId: number;
  DeliveryLocation: string;
  DeliveryLocationPlantId: number;
  RouteQuotaWGH: number;
  LotNO: string;
  RouteEXT: string;
  APTNo: number;
  VehicleCode: string;
  Arrived: string;
  SrcGrossTime: Date | undefined;
  Weight: number;
  Valid: boolean;
}

export interface OTW {
  ListOtw(request: ListOTWPayload): Promise<ListOTWResponse>;
}
