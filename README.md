# eso-status/forum-message

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=eso-status_forum-message&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=eso-status_forum-message)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=eso-status_forum-message&metric=bugs)](https://sonarcloud.io/summary/new_code?id=eso-status_forum-message)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=eso-status_forum-message&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=eso-status_forum-message)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=eso-status_forum-message&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=eso-status_forum-message)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=eso-status_forum-message&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=eso-status_forum-message)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=eso-status_forum-message&metric=coverage)](https://sonarcloud.io/summary/new_code?id=eso-status_forum-message)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=eso-status_forum-message&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=eso-status_forum-message)

[![npm](https://img.shields.io/npm/v/@eso-status/forum-message)](https://www.npmjs.com/package/@eso-status/forum-message)
[![license](https://img.shields.io/npm/l/@eso-status/forum-message)](https://github.com/eso-status/forum-message/blob/master/LICENSE.md)
<img src="https://img.shields.io/npm/dt/@eso-status/forum-message" alt="Downloads" />
<img src="https://img.shields.io/node/v/@eso-status/forum-message" alt="Node version" />

[![Build Status](https://github.com/eso-status/forum-message/workflows/CI/badge.svg)](https://github.com/eso-status/forum-message/actions/workflows/CI.yaml)
[![Build Status](https://github.com/eso-status/forum-message/workflows/CD/badge.svg)](https://github.com/eso-status/forum-message/actions/workflows/CD.yaml)

eso-status/forum-message is a library for retrieving and formatting data, which can be found at [https://forums.elderscrollsonline.com](https://forums.elderscrollsonline.com) or [https://forums.elderscrollsonline.com/en/categories/pts](https://forums.elderscrollsonline.com/en/categories/pts).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Return exemple](#return-exemple)

### Install

```shell
npm i @eso-status/forum-message
```

### Usage

```javascript
import { EsoStatusRawData } from '@eso-status/types';
import ForumMessage from '@eso-status/forum-message';
import ForumMessageUrl from '@eso-status/forum-message/const/ForumMessageUrl.const';

// Homepage data
const esoStatusRawDataList: EsoStatusRawData[] = await ForumMessage.getData();

// PTS category homepage data
const esoStatusRawDataList: EsoStatusRawData[] = await ForumMessage.getData('https://forums.elderscrollsonline.com');
```

### Return exemple

```text
[
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '[IN PROGRESS] NA megaservers for patch maintenance - March 9, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    pattern: '[IN PROGRESS] NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    slug: 'server_pc_na',
    type: 'server',
    support: 'pc',
    zone: 'na',
    status: 'down',
    rawStatus: '[IN PROGRESS]',
    rawSlug: '[IN PROGRESS] NA megaservers',
    rawDate: 'March 9, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    dates: ['2026-03-09T08:00:00.000Z', '2026-03-09T16:00:00.000Z'],
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '[IN PROGRESS] NA megaservers for patch maintenance - March 9, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    pattern: '[IN PROGRESS] NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    slug: 'server_ps_na',
    type: 'server',
    support: 'ps',
    zone: 'na',
    status: 'down',
    rawStatus: '[IN PROGRESS]',
    rawSlug: '[IN PROGRESS] NA megaservers',
    rawDate: 'March 9, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    dates: ['2026-03-09T08:00:00.000Z', '2026-03-09T16:00:00.000Z'],
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '[IN PROGRESS] NA megaservers for patch maintenance - March 9, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    pattern: '[IN PROGRESS] NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    slug: 'server_xbox_na',
    type: 'server',
    support: 'xbox',
    zone: 'na',
    status: 'down',
    rawStatus: '[IN PROGRESS]',
    rawSlug: '[IN PROGRESS] NA megaservers',
    rawDate: 'March 9, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    dates: ['2026-03-09T08:00:00.000Z', '2026-03-09T16:00:00.000Z'],
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '[IN PROGRESS] EU megaservers for patch maintenance - March 9, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
    pattern: '[IN PROGRESS] EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
    slug: 'server_pc_eu',
    type: 'server',
    support: 'pc',
    zone: 'eu',
    status: 'down',
    rawStatus: '[IN PROGRESS]',
    rawSlug: '[IN PROGRESS] EU megaservers',
    rawDate: 'March 9, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
    dates: ['2026-03-09T08:00:00.000Z', '2026-03-09T16:00:00.000Z'],
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '[IN PROGRESS] EU megaservers for patch maintenance - March 9, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
    pattern: '[IN PROGRESS] EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
    slug: 'server_ps_eu',
    type: 'server',
    support: 'ps',
    zone: 'eu',
    status: 'down',
    rawStatus: '[IN PROGRESS]',
    rawSlug: '[IN PROGRESS] EU megaservers',
    rawDate: 'March 9, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
    dates: ['2026-03-09T08:00:00.000Z', '2026-03-09T16:00:00.000Z'],
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '[IN PROGRESS] EU megaservers for patch maintenance - March 9, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
    pattern: '[IN PROGRESS] EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
    slug: 'server_xbox_eu',
    type: 'server',
    support: 'xbox',
    zone: 'eu',
    status: 'down',
    rawStatus: '[IN PROGRESS]',
    rawSlug: '[IN PROGRESS] EU megaservers',
    rawDate: 'March 9, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
    dates: ['2026-03-09T08:00:00.000Z', '2026-03-09T16:00:00.000Z'],
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: 'ESO Store and Account System for maintenance - March 11, 9:00AM EDT (13:00 UTC) - 1:00PM EDT (17:00 UTC)',
    pattern: 'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    slug: 'service_store_eso',
    type: 'service',
    support: 'store',
    zone: 'eso',
    status: 'planned',
    rawSlug: 'ESO Store',
    rawDate: 'March 11, 9:00AM EDT (13:00 UTC) - 1:00PM EDT (17:00 UTC)',
    dates: ['2026-03-11T13:00:00.000Z', '2026-03-11T17:00:00.000Z'],
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: 'ESO Store and Account System for maintenance - March 11, 9:00AM EDT (13:00 UTC) - 1:00PM EDT (17:00 UTC)',
    pattern: 'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    slug: 'service_system_account',
    type: 'service',
    support: 'system',
    zone: 'account',
    status: 'planned',
    rawSlug: 'Account System',
    rawDate: 'March 11, 9:00AM EDT (13:00 UTC) - 1:00PM EDT (17:00 UTC)',
    dates: ['2026-03-11T13:00:00.000Z', '2026-03-11T17:00:00.000Z'],
  },
]
```
