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
    this.statusList.forEach((status: Status): void => {
      const matchesList: RemoteRawStatus[] = <RemoteRawStatus[]>(
        this[`${status}MatchesList`]
      );

      const matches: RemoteRawStatus[] = matchesList.filter(
        (identifier: RemoteRawStatus): boolean => this.raw.includes(identifier),
      );
      if (matches.length > 0) {
        this.rawStatus = matches.shift();
        this.status = status;
      }
    });

    if (!this.status) {
      this.status = 'planned';
    }
  }
}
