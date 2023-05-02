/* eslint-disable */

export const protobufPackage = "samantra.services.winfeed.morning_report";

export interface MorningReportInsertDailySnapshotPayLoad {
  Date: string;
}

export interface MorningReportInsertDailySnapshotResponse {
  Status: number;
  Message: string;
}

export interface MorningReport {
  InsertDailySnapshot(
    request: MorningReportInsertDailySnapshotPayLoad,
  ): Promise<MorningReportInsertDailySnapshotResponse>;
}
