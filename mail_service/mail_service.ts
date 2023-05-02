/* eslint-disable */

export const protobufPackage = "mail_service";

export interface Empty {
}

export interface SendApprovalMailRequest {
  to: string[];
  cc: string[];
  docType: string;
  docNo: string;
  redirectLink: string;
  status: number;
  remark: string;
  language: string;
}

export interface MailService {
  SendApprovalMail(request: SendApprovalMailRequest): Promise<Empty>;
}
