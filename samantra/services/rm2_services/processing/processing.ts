/* eslint-disable */
import type { PlantQuantity } from "../../../common/common";

export const protobufPackage = "samantra.services.rm2.processing";

export interface Processing {
  lotNo: string;
  Quantities: PlantQuantity[];
}
