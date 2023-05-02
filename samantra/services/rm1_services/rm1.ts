/* eslint-disable */

export const protobufPackage = "samantra.services.rm1";

export interface ListOSLotInfoRequest {
  date: Date | undefined;
  quotaType: string;
}

export interface ListOSLotInfoResponse {
  OSLotInfos: OSLotInfo[];
}

export interface OSLotInfo {
  LotNo: string;
  Price: number;
  ExchangeRate: number;
  IncludingTransport: number;
  PONO: string;
}

export interface ListRM1Response {
  RM1OutsideWarehouses: RM1OutsideWarehouse[];
}

export interface RM1OutsideWarehouse {
  ID: string;
  ReceivedDate: string;
  ReceivedTime: string;
  QuotaType: string;
  PODocNo: string;
  LotNo: string;
  ProductGroup: string;
  ProductGroupName: string;
  ProductCode: string;
  ProductName: string;
  InvoiceNo: string;
  VendorCode: string;
  VendorName: string;
  QuotaQty: number;
  QuotaWghAgro: number;
  ContainerQtyAgro: number;
  ETDDate: string;
  ETADate: string;
  PackTypeCode: string;
  ContainerClass: string;
  PackingCode: string;
  TraderCode: string;
  PortCode: string;
  PortName: string;
  VesselName: string;
  QuotaWghAqua: number;
  ContainerQtyAqua: number;
  QuotaWghPo: number;
  ContainerQtyPo: number;
  QuotaWghSwt: number;
  ContainerQtySwt: number;
}

export interface RM1 {
  ListOSLotInfo(request: ListOSLotInfoRequest): Promise<ListOSLotInfoResponse>;
  GetListOWRM1(request: ListOSLotInfoRequest): Promise<ListRM1Response>;
}
