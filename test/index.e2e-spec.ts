import * as fs from 'node:fs';
import axios from 'axios';
import * as moment from 'moment';
import pattern from './data/pattern';
import ForumMessage from '../src';
import { PatternItem } from './interface/patternItem.interface';
import Connector from '../src/connector';

describe('ForumMessage (e2e)', (): void => {
  it.each(pattern)(
    'should pattern works with ($file)',
    async (patternData: PatternItem): Promise<void> => {
      jest
        .spyOn(axios, 'get')
        .mockImplementation(
          async (): Promise<{ status: number; data: string }> => {
            const data: string = await fs.promises.readFile(
              `${__dirname}/data/${patternData.file}`,
              'utf8',
            );
            return Promise.resolve({
              status: 200,
              data,
            });
          },
        );

      jest
        .useFakeTimers()
        .setSystemTime(
          moment
            .utc(patternData.date, 'YYYY-MM-DDTHH_mm_ss')
            .milliseconds(0)
            .valueOf(),
        );

      expect(await ForumMessage.getData(patternData.url)).toStrictEqual(
        patternData.expected,
      );
    },
  );

  it.each(pattern)(
    'should pattern return raw list with ($file)',
    async (patternData: PatternItem): Promise<void> => {
      jest
        .spyOn(axios, 'get')
        .mockImplementation(
          async (): Promise<{ status: number; data: string }> => {
            const data: string = await fs.promises.readFile(
              `${__dirname}/data/${patternData.file}`,
              'utf8',
            );
            return Promise.resolve({
              status: 200,
              data,
            });
          },
        );

      expect((await Connector.init(patternData.url)).raw).toStrictEqual(
        patternData.rawList,
      );
    },
  );

  it.each(pattern)(
    'should pattern return pattern list with ($file)',
    async (patternData: PatternItem): Promise<void> => {
      jest
        .spyOn(axios, 'get')
        .mockImplementation(
          async (): Promise<{ status: number; data: string }> => {
            const data: string = await fs.promises.readFile(
              `${__dirname}/data/${patternData.file}`,
              'utf8',
            );
            return Promise.resolve({
              status: 200,
              data,
            });
          },
        );

      expect((await Connector.init(patternData.url)).patterns).toStrictEqual(
        patternData.patternList,
      );
    },
  );

  it('should return empty array when forum return error or nothing', async (): Promise<void> => {
    jest
      .spyOn(axios, 'get')
      .mockImplementation(
        async (): Promise<{ status: number; data: string }> => {
          return Promise.resolve({
            status: 500,
            data: '',
          });
        },
      );

    expect(await ForumMessage.getData()).toEqual([]);
  });
});
