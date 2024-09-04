import { Moment } from 'moment/moment';
import { Slug, Status, Support, Type, Zone } from '@eso-status/types';
import { RemoteRawStatus } from '../../src/type/remoteRawStatus.type';
import { RemoteRawSlug } from '../../src/type/remoteRawSlug.type';
import { SourceUrl } from '../../src/type/sourceUrl.type';

export interface RawEsoStatus {
  sources: SourceUrl[];
  raw: string[];
  slugs?: Slug[];
  rawDate?: string;
  rawData?: string;
  dates?: Moment[];
  type?: Type;
  support?: Support;
  zone?: Zone;
  status?: Status;
  rawSlug?: RemoteRawSlug;
  rawStatus?: RemoteRawStatus;
}
