/* eslint-disable */

export const protobufPackage = "samantra.services.phantha";

export interface ListPhanthaPayload {
  RequestDate: Date | undefined;
}

export interface ListPhanthaResponse {
  ListPhantha: PhanthaItem[];
}

export interface PhanthaItem {
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
  QuotaWeight: number;
  QuotaQty: number;
}

export interface Phantha {
  ListPhantha(request: ListPhanthaPayload): Promise<ListPhanthaResponse>;
}
