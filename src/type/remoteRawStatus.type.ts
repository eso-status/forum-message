import { RemoteUpRawStatus } from './remoteUpRawStatus.type';
import { RemoteDownRawStatus } from './remoteDownRawStatus.type';
import { RemotePlannedRawStatus } from './remotePlannedRawStatus.type';

/**
 * Différent status des annonces du forum ESO
 */
export type RemoteRawStatus =
  | RemoteUpRawStatus
  | RemoteDownRawStatus
  | RemotePlannedRawStatus;
