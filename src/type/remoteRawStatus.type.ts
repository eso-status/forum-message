import { RemoteUpRawStatus } from './remoteUpRawStatus.type';
import { RemoteDownRawStatus } from './remoteDownRawStatus.type';
import { RemotePlannedRawStatus } from './remotePlannedRawStatus.type';
import { RemoteIssuesRawStatus } from './remoteIssuesRawStatus.type';

/**
 * Different statuses of announcements
 */
export type RemoteRawStatus =
  | RemoteUpRawStatus
  | RemoteDownRawStatus
  | RemotePlannedRawStatus
  | RemoteIssuesRawStatus;
