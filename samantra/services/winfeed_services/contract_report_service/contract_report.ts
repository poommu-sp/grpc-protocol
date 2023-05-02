/* eslint-disable */
import type { Plant } from "../../master_service/master";

export const protobufPackage = "samantra.services.winfeed.contract_report";

export interface GetSummaryByProductCodesAndDateRequest {
  ProductCodes: string[];
  Date: string;
  TimeTwoDigit: string;
}

export interface GetSummaryByDateAndTimeDigitStringAndProductCodesAndPlantCodesRequest {
  Date: Date | undefined;
  TimeDigit: string;
  ProductCodes: string[];
  PlantCodes: string[];
}

export interface ContractSummaryItem {
  ID: string;
  ReceivedDate: string;
  ReceivedTime: string;
  PlantCode: string;
  PlantName: string;
  OrgCode: string;
  OrgName: string;
  ProductGroup: string;
  ProductGroupName: string;
  ProductCode: string;
  ProductName: string;
  ContractStatus: string;
  DivisionCode: string;
  ContractNO: string;
  TransferFlag: string;
  VendorCode: string;
  VendorName: string;
  ContractDate: string;
  StartDate: string;
  ExpireDate: string;
  ContractWeight: number;
  BalanceWeight: number;
  Status: string;
  UnitPrice: number;
  SpecMax: number;
  SpecMin: number;
  SpecAdjustPrice: number;
  IsActive: boolean;
  ProductNameInReportName: string;
  SubProductNameInReportName: string;
  UnitPrices: number[];
}

export interface ContractReportSummaryItem {
  Plant: Plant | undefined;
  SelectedDayContract: ContractSummaryItem[];
  AnotherDayContract: ContractSummaryItem[];
  SelectedDayWeight: number;
  AnotherDayWeight: number;
  TotalWeight: number;
}

export interface ContractReportSummaryResponse {
  ContractReportSummaryList: ContractReportSummaryItem[];
}

export interface WinfeedContract {
  GetSummaryByProductCodesAndDate(
    request: GetSummaryByProductCodesAndDateRequest,
  ): Promise<ContractReportSummaryResponse>;
  GetSummaryByDateAndTimeDigitStringAndProductCodesAndPlantCodes(
    request: GetSummaryByDateAndTimeDigitStringAndProductCodesAndPlantCodesRequest,
  ): Promise<ContractReportSummaryResponse>;
}
