import { Moment } from 'moment/moment';
import { Status } from '@eso-status/types/lib/type/Status.type';
import { Slug } from '@eso-status/types/lib/type/Slug.type';
import { Type } from '@eso-status/types/lib/type/Type.type';
import { Support } from '@eso-status/types/lib/type/Support.type';
import { Zone } from '@eso-status/types/lib/type/Zone.type';
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
