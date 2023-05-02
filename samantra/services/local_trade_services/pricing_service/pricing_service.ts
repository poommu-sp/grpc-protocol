/* eslint-disable */

export const protobufPackage = "samantra.services.local_trade.pricing";

export interface PricingInitializePerWeekPayLoad {
  StartDate: string;
}

export interface PricingInitializePerWeekResponse {
  Status: number;
  Message: string;
}

export interface Pricing {
  InitializePerWeek(request: PricingInitializePerWeekPayLoad): Promise<PricingInitializePerWeekResponse>;
}
