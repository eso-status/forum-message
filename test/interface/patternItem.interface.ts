import { SourceUrl } from 'src/type/sourceUrl.type';
import { RawEsoStatus } from './rawEsoStatus.interface';

export interface PatternItem {
  date: string;
  url: SourceUrl;
  file: string;
  rawList: string[];
  expected: RawEsoStatus[];
}
