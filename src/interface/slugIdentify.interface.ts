import { Slug } from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';

export interface SlugIdentify {
  rawSlug: RemoteRawSlug;
  slug: Slug;
}
