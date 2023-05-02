/* eslint-disable */
import type { PlantQuantity } from "../../../common/common";

export const protobufPackage = "samantra.services.winfeed.warehouse_stock_report";

export interface ListWarehouseStockReportPayload {
  RequestDate: Date | undefined;
}

export interface ListWarehouseStockReportResponse {
  ListWarehouseStockReport: WarehouseStock[];
}

export interface WarehouseStock {
  NameInReport: string;
  SubNameInReport: string;
  LotNO: string;
  Warehouse: string;
  Age: number;
  Hold: number;
  PlantQuantities: PlantQuantity[];
  ProductCode: string;
  WarehouseSmokedDate: Date | undefined;
  WarehouseDGasDate: Date | undefined;
  WarehouseLastedDGasDate: Date | undefined;
  Remark: string;
}

export interface WarehouseStockReport {
  ListWarehouseStockReport(request: ListWarehouseStockReportPayload): Promise<ListWarehouseStockReportResponse>;
}
