const MessageReplacePattern: (string | RegExp)[][] = [
  [/\b(?:March|August|September|October|November)\b/g, 'M'],
  [/\b(?:Monday|Tuesday|Wednesday|Thursday|Friday)\b/g, 'D'],
  [/ patch /gi, ' '],
  [/\d{2}/g, 'X'],
  [/\d/g, 'X'],
  [
    /\bPTS is now back online and X.X.X is available\b/gi,
    'PTS is now available',
  ],
  [
    /\bThe PTS is now offline for the X.X.X maintenance and is currently unavailable\b/gi,
    'The PTS is currently unavailable while we perform maintenance',
  ],
  [
    /\bThe PTS is now offline for maintenance, and is currently unavailable\b/gi,
    'The PTS is currently unavailable while we perform maintenance',
  ],
  [/\bfor X.X.X \b/gi, ''],
  [/\bX:X(?:AM|PM)\b/gi, '[hour]:[minute][meridiem]'],
  [/\bX:X\b/gi, '[hour]:[minute]'],
  [/\bM X\b/gi, '[month] [day number]'],
  [/\b(?:UTC|EDT|EST)\b/g, '[timezone]'],
];
export default MessageReplacePattern;
