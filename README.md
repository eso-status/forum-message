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
import ForumMessage from '@eso-status/forum-message';
import { EsoStatusRawData } from '@eso-status/types';
import { ForumMessagePTSURL } from '@eso-status/forum-message/const';

// Homepage data
const esoStatusRawDataList: EsoStatusRawData[] = await ForumMessage.getData();

// PTS category homepage data
const esoStatusRawDataList: EsoStatusRawData[] = await ForumMessage.getData(ForumMessagePTSURL);
```
### Return exemple
```text
[
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '• PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
    slug: 'server_pc_eu',
    type: 'server',
    support: 'pc',
    zone: 'eu',
    status: 'planned',
    rawSlug: 'PC/Mac: NA and EU megaservers for'
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '• PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
    slug: 'server_pc_na',
    type: 'server',
    support: 'pc',
    zone: 'na',
    status: 'planned',
    rawSlug: 'PC/Mac: NA and EU megaservers for'
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    slug: 'server_xbox_eu',
    type: 'server',
    support: 'xbox',
    zone: 'eu',
    status: 'planned',
    rawSlug: 'Xbox: NA and EU megaservers for',
    rawDate: 'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    dates: [ Moment<2024-09-04T10:00:00Z>, Moment<2024-09-04T16:00:00Z> ]
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    slug: 'server_xbox_na',
    type: 'server',
    support: 'xbox',
    zone: 'na',
    status: 'planned',
    rawSlug: 'Xbox: NA and EU megaservers for',
    rawDate: 'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    dates: [ Moment<2024-09-04T10:00:00Z>, Moment<2024-09-04T16:00:00Z> ]
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    slug: 'server_ps_eu',
    type: 'server',
    support: 'ps',
    zone: 'eu',
    status: 'planned',
    rawSlug: 'PlayStation®: NA and EU megaservers for',
    rawDate: 'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    dates: [ Moment<2024-09-04T10:00:00Z>, Moment<2024-09-04T16:00:00Z> ]
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    slug: 'server_ps_na',
    type: 'server',
    support: 'ps',
    zone: 'na',
    status: 'planned',
    rawSlug: 'PlayStation®: NA and EU megaservers for',
    rawDate: 'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    dates: [ Moment<2024-09-04T10:00:00Z>, Moment<2024-09-04T16:00:00Z> ]
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    slug: 'service_store_eso',
    type: 'service',
    support: 'store',
    zone: 'eso',
    status: 'planned',
    rawSlug: 'ESO Store and Account System for',
    rawDate: 'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    dates: [ Moment<2024-09-04T14:00:00Z>, Moment<2024-09-04T16:00:00Z> ]
  },
  {
    source: 'https://forums.elderscrollsonline.com',
    raw: '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    slug: 'service_system_account',
    type: 'service',
    support: 'system',
    zone: 'account',
    status: 'planned',
    rawSlug: 'ESO Store and Account System for',
    rawDate: 'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    dates: [ Moment<2024-09-04T14:00:00Z>, Moment<2024-09-04T16:00:00Z> ]
  },
  {
    source: 'https://forums.elderscrollsonline.com/en/categories/pts',
    raw: 'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
    slug: 'server_pc_pts',
    type: 'server',
    support: 'pc',
    zone: 'pts',
    status: 'planned',
    rawSlug: 'PTS',
    rawDate: 'Thursday at 9:00AM EDT (13:00 UTC). ',
    dates: [ Moment<2024-09-05T13:00:00Z> ],
    rawStatus: 'We will be performing maintenance'
  }
]
```
