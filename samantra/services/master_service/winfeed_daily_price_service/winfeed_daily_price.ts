/* eslint-disable */

export const protobufPackage = "samantra.services.master.winfeed_daily_price";

export interface WinfeedDailyPrice {
  ReceivedDate: Date | undefined;
  ReceivedTime: Date | undefined;
  PlantCode: string;
  PlantName: string;
  OrgCode: string;
  OrgName: string;
  ProductGroup: string;
  ProductCode: string;
  LotNO: string;
  DivisionCode: string;
  UnitPrice: number;
  RequestDate: Date | undefined;
  StartDate: Date | undefined;
}
