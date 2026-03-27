export type MessagePatternType =
  // ServerPcEuSlug - ServerPcNaSlug - Planned
  | 'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPcEuSlug - ServerPcNaSlug - Issues
  | 'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers'

  // ServerPcEuSlug - ServerPcNaSlug - Down
  | '[IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'
  | '[EXTENDED] PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPcEuSlug - ServerPcNaSlug - Up
  | '[COMPLETE] PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'
  | 'The issues on the North American and European PC/Mac megaservers have been resolved at this time'

  // ServerPcPtsSlug - Planned
  | 'We will be performing maintenance on the PTS on D at [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPcPtsSlug - Down
  | 'The PTS is currently unavailable while we perform maintenance'

  // ServerPcPtsSlug - up
  | 'The maintenance is complete, and the PTS is now available'

  // ServerPsEuSlug - ServerPsNaSlug - Planned
  | 'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPsEuSlug - ServerPsNaSlug - Down
  | '[IN PROGRESS] PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'
  | '[EXTENDED] PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPsEuSlug - ServerPsNaSlug - Issues
  | 'The PlayStation™ Network is currently experiencing a service interruption'

  // ServerPsEuSlug - ServerPsNaSlug - Up
  | '[COMPLETE] PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'
  | 'The PlayStation™ Network service interruption has been resolved'

  // ServerXboxEuSlug - ServerXboxNaSlug - Planned
  | 'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerXboxEuSlug - ServerXboxNaSlug - Issues
  | 'Xbox Live™ is currently experiencing a service interruption'

  // ServerXboxEuSlug - ServerXboxNaSlug - Down
  | '[IN PROGRESS] Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerXboxEuSlug - ServerXboxNaSlug - Up
  | '[COMPLETE] Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'
  | 'The Xbox Live™ service interruption has been resolved'

  // ServiceStoreEsoSlug - ServiceSystemAccountSlug - Planned
  | 'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServiceStoreEsoSlug - ServiceSystemAccountSlug - Down
  | '[IN PROGRESS] ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'
  | '[EXTENDED] ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServiceStoreEsoSlug - ServiceSystemAccountSlug - Up
  | '[COMPLETE] ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServiceWebSiteSlug - Planned
  | 'ESO Website for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServiceWebSiteSlug - Down
  | '[IN PROGRESS] ESO Website for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServiceWebSiteSlug - Up
  | '[COMPLETE] ESO Website for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPcEuSlug - ServerPSEuSlug - ServerXboxEuSlug - Planned
  | 'EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'

  // ServerPcNaSlug - ServerPSNaSlug - ServerXboxNaSlug - Planned
  | 'NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPcEuSlug - ServerPSEuSlug - ServerXboxEuSlug - Down
  | '[IN PROGRESS] EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'

  // ServerPcNaSlug - ServerPSNaSlug - ServerXboxNaSlug - Down
  | '[IN PROGRESS] NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPcEuSlug - ServerPSEuSlug - ServerXboxEuSlug - Up
  | '[COMPLETE] EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'

  // ServerPcNaSlug - ServerPSNaSlug - ServerXboxNaSlug - UP
  | '[COMPLETE] NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPcEuSlug - Up
  | '[COMPLETE] PC/Mac: EU megaserver for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPcNaSlug - Down
  | '[EXTENDED] PC/Mac: NA megaserver for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'

  // ServerPcNaSlug - Issues
  | 'We are currently investigating connection issues some players are having on the North American PC/Mac megaserver'

  // ServerPcNaSlug - Up
  | '[COMPLETE] PC/Mac: NA megaserver for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])'
  | 'The connection issues for the North American PC/Mac megaserver have been resolved at this time'

  // ServerXboxEuSlug - Planned
  | 'Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([month] [day number], [hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'
  | 'Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'

  // ServerXboxEuSlug - Down
  | '[IN PROGRESS] Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([month] [day number], [hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'
  | '[IN PROGRESS] Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'
  | '[EXTENDED] Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([month] [day number], [hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'

  // ServerXboxEuSlug - Up
  | '[COMPLETE] Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([month] [day number], [hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'
  | '[COMPLETE] Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])'

  // ServerPsNaSlug - Planned
  | 'In response to the ongoing issue, the North American PlayStation® megaserver will be taken offline for maintenance'

  // ServerPsNaSlug - Issues
  | 'We are currently investigating issues some players are having logging into the North American PlayStation® megaserver'

  // ServerPsNaSlug - Down
  | 'In response to the ongoing issue, the North American PlayStation® megaserver is currently unavailable while we perform maintenance'

  // ServerPsNaSlug - Up
  | 'The issue is resolved, and the North American PlayStation® megaserver is now available';
