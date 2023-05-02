/* eslint-disable */

export const protobufPackage = "samantra.services.working_day";

export interface WorkingDayPayload {
  Date: Date | undefined;
  PlantCodes: string[];
}

export interface WorkingDayInfo {
  PlantCode: string;
  Date: Date | undefined;
  Day: string;
  IsWork: boolean;
}

export interface WorkingDayGroup {
  PlantCode: string;
  WorkingDays: WorkingDayInfo[];
}

export interface WorkingDayResponse {
  WorkingDayGroups: WorkingDayGroup[];
}

export interface WorkingDay {
  GetGetWorkingDayByDateAndPlantCodes(request: WorkingDayPayload): Promise<WorkingDayResponse>;
}
