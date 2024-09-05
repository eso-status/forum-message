import { Moment } from 'moment/moment';
import { Slug, Status, Support, Type, Zone } from '@eso-status/types';
import { SourceUrl } from '../type/sourceUrl.type';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';

export interface RawEsoStatus {
  source: SourceUrl;
  raw: string;
  slug: Slug;
  rawDate?: string;
  dates?: Moment[];
  type: Type;
  support: Support;
  zone: Zone;
  status: Status;
  rawSlug: RemoteRawSlug;
  rawStatus?: RemoteRawStatus;
}
