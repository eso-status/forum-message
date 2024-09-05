import { Moment } from 'moment/moment';
import { Slug, Status, Support, Type, Zone } from '@eso-status/types';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';
import { SourceUrl } from '../type/sourceUrl.type';

export interface EsoStatusRawData {
  source: SourceUrl;
  raw: string;
  status: Status;
  rawStatus?: RemoteRawStatus;
  slug: Slug;
  rawSlug: RemoteRawSlug;
  type: Type;
  support: Support;
  zone: Zone;
  dates?: Moment[];
  rawDate?: string;
}
