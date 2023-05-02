/* eslint-disable */

export const protobufPackage = "samantra.services.master.winfeed_stock";

export interface WinfeedStock {
  ID: string;
  ReceivedDate: Date | undefined;
  ReceivedTime: Date | undefined;
  OrgCode: string;
  StockDate: Date | undefined;
  Time: Date | undefined;
  ProductGroup: string;
  ProductCode: string;
  GradeCode: string;
  LotNO: string;
  PurchaseWeight: number;
  TransferRWeight: number;
  ReturnRWeight: number;
  TransformRWeight: number;
  Adjust: number;
  IssuedWeight: number;
  SaleWeight: number;
  TransferIWeight: number;
  ReturnIWeight: number;
  TransformIWeight: number;
  DamageWeight: number;
  WeightTotal: number;
}
