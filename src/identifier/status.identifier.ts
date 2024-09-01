import { Status } from '@eso-status/types';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';
import { RemoteUpRawStatus } from '../type/remoteUpRawStatus.type';
import { RemoteDownRawStatus } from '../type/remoteDownRawStatus.type';
import { RemotePlannedRawStatus } from '../type/remotePlannedRawStatus.type';

export default class StatusIdentifier {
  public rawStatus: RemoteRawStatus;

  public status: Status;

  private readonly statusList: Status[] = ['up', 'down', 'planned'];

  private readonly upMatchesList: RemoteUpRawStatus[] = [
    '[COMPLETE]',
    'now available',
    'complete',
  ];

  private readonly downMatchesList: RemoteDownRawStatus[] = [
    '[EXTENDED]',
    '[IN PROGRESS]',
    'unavailable',
  ];

  private readonly plannedMatchesList: RemotePlannedRawStatus[] = [
    'We will be performing maintenance',
  ];

  constructor(private readonly raw: string) {
    this.statusList.forEach((status: Status): void => this.identify(status));

    this.default();
  }

  private getMatchList(status: Status): RemoteRawStatus[] {
    return <RemoteRawStatus[]>this[`${status}MatchesList`];
  }

  private getMatches(status: Status): RemoteRawStatus[] {
    return this.getMatchList(status).filter(
      (identifier: RemoteRawStatus): boolean => this.raw.includes(identifier),
    );
  }

  private identify(status: Status): void {
    const matches: RemoteRawStatus[] = this.getMatches(status);
    if (matches.length > 0) {
      this.rawStatus = matches.shift();
      this.status = status;
    }
  }

  private default(): void {
    if (!this.status) {
      this.status = 'planned';
    }
  }
}
