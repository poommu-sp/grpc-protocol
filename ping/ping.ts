/* eslint-disable */

export const protobufPackage = "ping";

export interface PongRequest {
  message: string;
}

export interface PongResponse {
  message: string;
}

export interface PingService {
  Ping(request: PongRequest): Promise<PongResponse>;
}
