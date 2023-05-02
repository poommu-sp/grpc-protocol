/* eslint-disable */
import type { Amount, PlantQuantity } from "../../../common/common";

export const protobufPackage = "samantra.services.rm2.warehouse";

export interface Warehouse {
  lotNo: string;
  productCode: string;
  plantId: number;
  age: number;
  total: Amount | undefined;
  quantities: PlantQuantity[];
}
