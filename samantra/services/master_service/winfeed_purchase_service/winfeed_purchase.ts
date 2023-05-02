/* eslint-disable */

export const protobufPackage = "samantra.services.master.winfeed_purchase";

export interface WinfeedPurchase {
  ID: string;
  ReceivedDate: Date | undefined;
  ReceivedTime: Date | undefined;
  PlantCode: string;
  PlantName: string;
  ProductGroup: string;
  ProductCode: string;
  VendorCode: string;
  VendorName: string;
  LicensePlate: string;
  TrailerLicense: string;
  SerialNO: number;
  WeightNO: number;
  GRDocNO: string;
  NetWeight: number;
  PaymentWeight: number;
  ReceiveQuantity: number;
  PackagingWeight: number;
  NetAmount: number;
  TGRNNO: string;
  GRNNO: string;
  TGRNDate: Date | undefined;
  ContractNO: string;
}
