/* eslint-disable */
import type { OTW } from "./otw/otw";
import type { Phantha } from "./phantha/phantha";
import type { Processing } from "./processing/processing";
import type { Warehouse } from "./warehouse/warehouse";

export const protobufPackage = "samantra.services.rm2";

export interface ListWarehouseSummaryByLotRequest {
  date: Date | undefined;
  productCodes: string[];
}

export interface ListWarehouseSummaryByLotResponse {
  warehouses: Warehouse[];
}

export interface ListPhanthaOTWRequest {
  date: Date | undefined;
  productCodes: string[];
}

export interface ListPhanthaOTWResponse {
  phantas: Phantha[];
  otws: OTW[];
}

export interface ListProcessingRequest {
  date: Date | undefined;
  productCodes: string[];
}

export interface ListProcessingResponse {
  processings: Processing[];
}

export interface RM2 {
  ListWarehouseSummaryByLot(request: ListWarehouseSummaryByLotRequest): Promise<ListWarehouseSummaryByLotResponse>;
  ListPhanthaOTW(request: ListPhanthaOTWRequest): Promise<ListPhanthaOTWResponse>;
  ListProcessings(request: ListProcessingRequest): Promise<ListProcessingResponse>;
}
