import { RemoteUpRawStatus } from './remoteUpRawStatus.type';
import { RemoteDownRawStatus } from './remoteDownRawStatus.type';
import { RemotePlannedRawStatus } from './remotePlannedRawStatus.type';

/**
 * Différent status des annonces
 */
export type RemoteRawStatus =
  | RemoteUpRawStatus
  | RemoteDownRawStatus
  | RemotePlannedRawStatus;
