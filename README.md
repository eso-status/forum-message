# eso-status/forum-message
[![npm](https://img.shields.io/npm/v/@eso-status/forum-message)](https://www.npmjs.com/package/@eso-status/forum-message)
[![license](https://img.shields.io/npm/l/@eso-status/forum-message)](https://github.com/eso-status/forum-message/blob/master/LICENSE.md)
<img src="https://img.shields.io/npm/dt/@eso-status/forum-message" alt="Downloads" />
[![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/eso-status/forum-message)](https://lgtm.com/projects/g/eso-status/forum-message/context:javascript)
<img src="https://img.shields.io/node/v/@eso-status/forum-message" alt="Node version" />
[![Build Status](https://github.com/eso-status/forum-message/workflows/CI/badge.svg)](https://github.com/eso-status/forum-message/actions/workflows/CI.yaml)
[![Delivery Status](https://github.com/eso-status/forum-message/workflows/CD/badge.svg)](https://github.com/eso-status/forum-message/actions/workflows/CD.yaml)

eso-status/forum-message is a library for getting and formatting data can founded in [https://forums.elderscrollsonline.com/](https://forums.elderscrollsonline.com/) and [https://forums.elderscrollsonline.com/en/categories/pts](https://forums.elderscrollsonline.com/en/categories/pts)

## Table of Contents
- [How to get it ?](#how-to-get-it-)
- [How to use it ?](#how-to-use-it-)
- [Returned data format](#returned-data-format-)

### How to get it ?
```shell
npm i @eso-status/forum-message
```

### How to use it ?
- TypeScript
```typescript
import { RawEsoStatus } from '@eso-status/types';
import { ForumMessage } from "@eso-status/forum-message";

ForumMessage.getData().then((data: RawEsoStatus[]): void => {
  
}).catch((error: Error): void => {
  
});
```
- JavaScript
```javascript
const { ForumMessage } = require('@eso-status/forum-message');

ForumMessage.getData().then(function (data) {
  
}).catch(function (error) {
  
});
```

### Returned data format ?
```text
[
  {
    sources: [
      'https://forums.elderscrollsonline.com/en/categories/pts',
      'https://forums.elderscrollsonline.com/'
    ],
    raw: '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
    slugs: [ 'server_pc_na' ],
    rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
    date: [ Moment<2021-07-26T06:00:00Z>, Moment<2021-07-26T10:00:00Z> ],
    type: 'server',
    support: 'pc',
    zone: 'na',
    status: 'planned'
  },
  {
    sources: [
      'https://forums.elderscrollsonline.com/en/categories/pts',
      'https://forums.elderscrollsonline.com/'
    ],
    raw: '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
    slugs: [ 'server_pc_eu' ],
    rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
    date: [ Moment<2021-07-26T06:00:00Z>, Moment<2021-07-26T10:00:00Z> ],
    type: 'server',
    support: 'pc',
    zone: 'eu',
    status: 'planned'
  },
  {
    sources: [
      'https://forums.elderscrollsonline.com/en/categories/pts',
      'https://forums.elderscrollsonline.com/'
    ],
    raw: '• Xbox: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    slugs: [ 'server_xbox_na' ],
    rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    date: [ Moment<2021-07-28T08:00:00Z>, Moment<2021-07-28T12:00:00Z> ],
    type: 'server',
    support: 'xbox',
    zone: 'na',
    status: 'planned'
  },
  {
    sources: [
      'https://forums.elderscrollsonline.com/en/categories/pts',
      'https://forums.elderscrollsonline.com/'
    ],
    raw: '• Xbox: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    slugs: [ 'server_xbox_eu' ],
    rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    date: [ Moment<2021-07-28T08:00:00Z>, Moment<2021-07-28T12:00:00Z> ],
    type: 'server',
    support: 'xbox',
    zone: 'eu',
    status: 'planned'
  },
  {
    sources: [
      'https://forums.elderscrollsonline.com/en/categories/pts',
      'https://forums.elderscrollsonline.com/'
    ],
    raw: '• PlayStation®: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    slugs: [ 'server_ps_na' ],
    rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    date: [ Moment<2021-07-28T08:00:00Z>, Moment<2021-07-28T12:00:00Z> ],
    type: 'server',
    support: 'ps',
    zone: 'na',
    status: 'planned'
  },
  {
    sources: [
      'https://forums.elderscrollsonline.com/en/categories/pts',
      'https://forums.elderscrollsonline.com/'
    ],
    raw: '• PlayStation®: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    slugs: [ 'server_ps_eu' ],
    rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    date: [ Moment<2021-07-28T08:00:00Z>, Moment<2021-07-28T12:00:00Z> ],
    type: 'server',
    support: 'ps',
    zone: 'eu',
    status: 'planned'
  },
  {
    sources: [ 'https://forums.elderscrollsonline.com/en/categories/pts' ],
    raw: 'We will be performing maintenance for patch 7.1.2 on the PTS on Monday at 2:00AM EDT (06:00 UTC). ',
    slugs: [ 'server_pc_pts' ],
    rawDate: 'Monday at 2:00AM EDT (06:00 UTC). ',
    date: [ Moment<2021-07-24T04:00:00Z> ],
    type: 'server',
    support: 'pc',
    zone: 'pts',
    status: 'planned'
  }
]
```
