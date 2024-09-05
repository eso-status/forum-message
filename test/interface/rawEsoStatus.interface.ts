import { Moment } from 'moment/moment';
import { Slug } from '@eso-status/types/lib/type/Slug.type';
import { Type } from '@eso-status/types/lib/type/Type.type';
import { Support } from '@eso-status/types/lib/type/Support.type';
import { Zone } from '@eso-status/types/lib/type/Zone.type';
import { Status } from '@eso-status/types/lib/type/Status.type';
import { SourceUrl } from '../../src/type/sourceUrl.type';
import { RemoteRawSlug } from '../../src/type/remoteRawSlug.type';
import { RemoteRawStatus } from '../../src/type/remoteRawStatus.type';

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
