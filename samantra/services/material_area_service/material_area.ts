/* eslint-disable */
import type { Plant } from "../master_service/master";

export const protobufPackage = "samantra.services.material_area";

export interface MaterialAreaPayload {
  Date: Date | undefined;
  PlantCodes: string[];
}

export interface Area {
  NeedBulk: number;
  NeedBag: number;
  ExistBulk: number;
  ExistBag: number;
}

export interface MaterialAreaInfo {
  Date: Date | undefined;
  Plant: Plant | undefined;
  LimitBulk: number;
  LimitBag: number;
  Areas: Area[];
}

export interface MaterialAreaResponse {
  MaterialAreas: MaterialAreaInfo[];
}

export interface MaterialArea {
  GetMaterialAreaByDateAndPlantCodes(request: MaterialAreaPayload): Promise<MaterialAreaResponse>;
}
