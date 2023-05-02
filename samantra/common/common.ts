/* eslint-disable */

export const protobufPackage = "samantra.common";

export interface Empty {
}

export interface NullFloat64 {
  Float64: number;
  Valid: boolean;
}

export interface NullInt64 {
  Int64: number;
  Valid: boolean;
}

export interface NullString {
  String: string;
  Valid: boolean;
}

export interface Unit {
  ID: number;
  ShortName: string;
  Name: string;
  Type: number;
}

export interface Amount {
  Value: NullFloat64 | undefined;
  Unit: Unit | undefined;
}

export interface PlantQuantity {
  ID: number;
  Quantity: Amount | undefined;
  QuotaWeight: number;
  QuotaQty: number;
}

export interface PlantQuantities {
  PlantQuantities: PlantQuantity[];
}

/** a stand-in, not used but exist only for go library to be able to detect this file */
export interface EmptyStandIn {
  EmptyFunction(request: Empty): Promise<Empty>;
}
