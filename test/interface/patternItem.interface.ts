import { RawEsoStatus } from './rawEsoStatus.interface';
import { SourceUrl } from '../../src/type/sourceUrl.type';

export interface PatternItem {
  date: string;
  url: SourceUrl;
  file: string;
  rawList: string[];
  expected: RawEsoStatus[];
}
