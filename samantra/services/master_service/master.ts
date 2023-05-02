/* eslint-disable */
import type { WinfeedDailyPrice } from "./winfeed_daily_price_service/winfeed_daily_price";
import type { WinfeedPurchase } from "./winfeed_purchase_service/winfeed_purchase";
import type { WinfeedStock } from "./winfeed_stock_service/winfeed_stock";

export const protobufPackage = "samantra.services.master";

export interface Empty {
}

export interface User {
  ID: string;
  UserName: string;
  Email: string;
  FullName: string;
  IsActive: string;
  CreatedTimestamp: number;
}

export interface UsersResponse {
  Users: User[];
}

export interface ProductCodesResponse {
  ProductCodes: string[];
}

export interface WinfeedProductReportNamesResponse {
  WinfeedProductReportNames: string[];
}

export interface WinfeedProductReportName {
  message: string;
}

export interface WinfeedProductReportIDsResponse {
  ids: number[];
}

export interface WinfeedProductReportID {
  message: number;
}

export interface Plant {
  id: number;
  nameEn: string;
  nameTh: string;
  nameShortEn: string;
  orgCode: string;
  countryAlpha3: string;
  nameShortTh: string;
  companyNameTh: string;
  companyNameEn: string;
  priority: string;
  sapCode: string;
  orgAccBkp: string;
  feedmillTypeId: number;
  rm2OperationCode: string;
  rm2Code: string;
  osPriority: string;
}

export interface PlantsResponse {
  plants: Plant[];
}

export interface Org {
  id: number;
  plantId: number;
  nameEn: string;
  nameTh: string;
  nameShortEn: string;
  orgCode: string;
  countryAlpha3: string;
  nameShortTh: string;
  companyNameTh: string;
  companyNameEn: string;
  priority: string;
  sapCode: string;
  orgAccBkp: string;
}

export interface OrgsResponse {
  orgs: Org[];
}

export interface SubOrg {
  id: number;
  orgId: number;
  nameEn: string;
  nameTh: string;
  nameShortEn: string;
  orgCode: string;
  countryAlpha3: string;
  nameShortTh: string;
  companyNameTh: string;
  companyNameEn: string;
  priority: string;
  sapCode: string;
  orgAccBkp: string;
}

export interface SubOrgsResponse {
  subOrgs: SubOrg[];
}

export interface GetWinfeedProductComponentsWithSubIDsRequest {
  message: number[];
}

export interface WinfeedProductComponentsResponse {
  WinfeedProductComponents: WinfeedProductComponent[];
}

export interface WinfeedProductComponent {
  ID: number;
  Name: string;
  WinfeedSubProductReportComponents: WinfeedSubProductComponent[];
}

export interface WinfeedSubProductComponent {
  ID: number;
  WinfeedProductReportID: number;
  Name: string;
  WinfeedProducts: WinfeedProduct[];
}

export interface WinfeedProduct {
  ID: number;
  NameEN: string;
  NameTH: string;
  Origin: string;
  Code: string;
  GroupID: number;
  PackageID: number;
}

export interface GetWinfeedDivisionRequest {
  id: number;
}

export interface GetWinfeedDivisionListResponse {
  WinfeedDivisionList: WinfeedDivision[];
}

export interface GetWinfeedDivisionResponse {
  winfeedDivision: WinfeedDivision | undefined;
}

export interface WinfeedDivision {
  id: number;
  name: string;
  countryAlpha3: string;
  countryName: string;
  code: string;
}

export interface ListWinfeedProductByDivisionIDRequest {
  id: number;
}

export interface ListWinfeedProductByDivisionIDResponse {
  winfeedProductList: WinfeedProduct[];
}

export interface ListWinfeedStockRequest {
  startDate: Date | undefined;
  endDate: Date | undefined;
  productCodes: string[];
  orgCode: string;
  twoDigitTime: string;
}

export interface ListWinfeedStockResponse {
  listWinfeedStock: WinfeedStock[];
}

export interface ListWinfeedPurchaseRequest {
  startDate: Date | undefined;
  endDate: Date | undefined;
  productCodes: string[];
  divisionId: number;
  twoDigitTime: string;
  plantCode: string;
  threeDigitTime: string;
}

export interface ListWinfeedPurchaseResponse {
  listWinfeedPurchase: WinfeedPurchase[];
}

export interface ListWinfeedDailyPriceRequest {
  startDate: Date | undefined;
  endDate: Date | undefined;
  productCodes: string[];
  orgCode: string;
}

export interface ListWinfeedDailyPriceResponse {
  listWinfeedDailyPrice: WinfeedDailyPrice[];
}

export interface WinfeedGrade {
  id: number;
  name: string;
}

export interface GetWinfeedGradeListResponse {
  WinfeedGradeList: WinfeedGrade[];
}

export interface Master {
  GetUsers(request: Empty): Promise<UsersResponse>;
  GetProductCodesWithPermission(request: Empty): Promise<ProductCodesResponse>;
  GetWinfeedProductReportNamesWithPermission(request: Empty): Promise<WinfeedProductReportNamesResponse>;
  GetWinfeedProductReportIDsWithPermission(request: Empty): Promise<WinfeedProductReportIDsResponse>;
  GetProductCodesFromWinfeedProductReportName(request: WinfeedProductReportName): Promise<ProductCodesResponse>;
  GetProductCodesFromWinfeedProductReportID(request: WinfeedProductReportID): Promise<ProductCodesResponse>;
  GetAllPlants(request: Empty): Promise<PlantsResponse>;
  GetPlants(request: Empty): Promise<PlantsResponse>;
  GetPlantsAgro(request: Empty): Promise<PlantsResponse>;
  GetOrgs(request: Empty): Promise<OrgsResponse>;
  GetOrgsAgro(request: Empty): Promise<OrgsResponse>;
  GetSubOrgs(request: Empty): Promise<SubOrgsResponse>;
  GetWinfeedProductComponentsWithSubIDs(
    request: GetWinfeedProductComponentsWithSubIDsRequest,
  ): Promise<WinfeedProductComponentsResponse>;
  GetWinfeedDivisionList(request: Empty): Promise<GetWinfeedDivisionListResponse>;
  GetWinfeedDivisionListWithPermission(request: Empty): Promise<GetWinfeedDivisionListResponse>;
  GetWinfeedDivision(request: GetWinfeedDivisionRequest): Promise<GetWinfeedDivisionResponse>;
  ListWinfeedProductByDivisionID(
    request: ListWinfeedProductByDivisionIDRequest,
  ): Promise<ListWinfeedProductByDivisionIDResponse>;
  ListWinfeedStock(request: ListWinfeedStockRequest): Promise<ListWinfeedStockResponse>;
  ListWinfeedPurchase(request: ListWinfeedPurchaseRequest): Promise<ListWinfeedPurchaseResponse>;
  ListWinfeedDailyPrice(request: ListWinfeedDailyPriceRequest): Promise<ListWinfeedDailyPriceResponse>;
  GetWinfeedGradeList(request: Empty): Promise<GetWinfeedGradeListResponse>;
  ListWinfeedProduct(request: Empty): Promise<ListWinfeedProductByDivisionIDResponse>;
}
