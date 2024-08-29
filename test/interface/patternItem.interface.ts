import { RawEsoStatus } from '@eso-status/types';
import { SourceUrl } from '../../lib/type/sourceUrl.type';

export interface PatternItem {
  date: string;
  url: SourceUrl;
  file: string;
  expected: RawEsoStatus[];
}
