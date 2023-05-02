/* eslint-disable */

export const protobufPackage = "samantra.services.winfeed.stock_report";

export interface StockReportPayload {
  StartDate: number;
  EndDate: number;
  QuanType: number;
}

export interface GetStockReportProductCodeRequest {
  StartDate: number;
  EndDate: number;
}

export interface StockReportFeedmillQuantity {
  OrgCode: string;
  FactoryShortName: string;
  Quantity: number;
}

export interface StockReportItem {
  ProductNameInReportID: number;
  ProductNameInReportName: string;
  SubProductNameInReportID: number;
  SubProductNameInReportName: string;
  LotNo: string;
  FeedmillQuantities: StockReportFeedmillQuantity[];
  SumQuantity: number;
  IsMain: boolean;
  IsShown: boolean;
}

export interface StockReportProductCodeItem {
  ProductCode: string;
  LotNo: string;
  GradeCode: string;
  FeedmillQuantities: StockReportFeedmillQuantity[];
  SumQuantity: number;
}

export interface StockReportResponse {
  StockReportList: StockReportItem[];
}

export interface GetStockReportProductCodeResponse {
  StockReportProductCodeList: StockReportProductCodeItem[];
}

export interface StockReport {
  Get(request: StockReportPayload): Promise<StockReportResponse>;
  GetStockReportProductCode(request: GetStockReportProductCodeRequest): Promise<GetStockReportProductCodeResponse>;
}
