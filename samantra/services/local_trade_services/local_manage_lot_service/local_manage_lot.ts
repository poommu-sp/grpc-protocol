/* eslint-disable */

export const protobufPackage = "samantra.services.local_trade.local_manage_lot";

export interface Amount {
  Value: number;
  UnitID: number;
}

export interface IncludingTransportView {
  PlantIDList: number[];
  Cost: Amount | undefined;
}

export interface LocalLotForOS {
  LotNO: string;
  UUID: string;
  ETA: string;
  ETD: string;
  Tonnes: number;
  PlantTypeID: number;
  PODNo: string;
  BrokerContractNo: string;
  PortName: string;
  NumberOfContainer: number;
  SeaFreightID: number;
}

export interface LocalManageLotForOSPayload {
  ProductCodeList: string[];
  PlantTypeList: number[];
  ETAStartDateUnix: number;
  ETAEndDateUnix: number;
}

export interface LocalManageLotForOS {
  ProductCode: string;
  PlantTypeID: number;
  Price: Amount | undefined;
  ExchangeRate: Amount | undefined;
  ExcludingTransport: Amount | undefined;
  IncludingTransport: IncludingTransportView[];
  Lots: LocalLotForOS[];
}

export interface LocalManageLotForOSResponse {
  LocalManageLotForOSList: LocalManageLotForOS[];
}

export interface LocalManageLot {
  GetInterTradeWayByParam(request: LocalManageLotForOSPayload): Promise<LocalManageLotForOSResponse>;
  GetLocalTradeWayByParam(request: LocalManageLotForOSPayload): Promise<LocalManageLotForOSResponse>;
}
