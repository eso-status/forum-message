import { Moment } from 'moment';
import {
  Support,
  Slug,
  Status,
  Type,
  Zone,
} from '@eso-status/types';
import ForumMessageElement from '../src/classes/ForumMessageElement';
import { forumMessagePattern, slugPattern } from './pattern';

forumMessagePattern.forEach((pattern: {raw: string, result: {rawDate: string, slug: Slug[], status: Status, dates: Moment[]}}): void => {
  test(`getSlug(${pattern.raw})`, (): void => {
    expect(ForumMessageElement.getSlug(pattern.raw)).toEqual(pattern.result.slug);
  });
  test(`getDate(${pattern.result.rawDate})`, (): void => {
    expect(ForumMessageElement.getDate(pattern.result.rawDate)).toEqual(pattern.result.dates);
  });
  test(`getStatus(${pattern.raw})`, (): void => {
    expect(ForumMessageElement.getStatus(pattern.raw)).toEqual(pattern.result.status);
  });
  test(`getRawDate(${pattern.raw})`, (): void => {
    expect(ForumMessageElement.getRawDate(pattern.raw)).toEqual(pattern.result.rawDate);
  });
});

slugPattern.forEach((pattern: {slug: Slug, result: {type: Type, support: Support, zone: Zone}}): void => {
  test(`getType(${pattern.slug})`, (): void => {
    expect(ForumMessageElement.getType(pattern.slug)).toEqual(pattern.result.type);
  });
  test(`getSupport(${pattern.slug})`, (): void => {
    expect(ForumMessageElement.getSupport(pattern.slug)).toEqual(pattern.result.support);
  });
  test(`getZone(${pattern.slug})`, (): void => {
    expect(ForumMessageElement.getZone(pattern.slug)).toEqual(pattern.result.zone);
  });
});
