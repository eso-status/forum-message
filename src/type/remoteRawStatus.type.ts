import { RemoteUpRawStatus } from './remoteUpRawStatus.type';
import { RemoteDownRawStatus } from './remoteDownRawStatus.type';
import { RemotePlannedRawStatus } from './remotePlannedRawStatus.type';

export type RemoteRawStatus =
  | RemoteUpRawStatus
  | RemoteDownRawStatus
  | RemotePlannedRawStatus;
