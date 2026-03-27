const ForumMessageReplacePattern: (string | RegExp)[][] = [
  [/("requestID":")[^"]*/g, '$1'],
  [/("cacheBuster":")[^"]*/g, '$1'],
  [/("availableCategoryIDs":\[)[^\]]*/g, '$1'],
  [/("dateLastActive":\{)[^}]*/g, '$1'],
  [/(\?[hv]=)[a-f0-9]*/g, '$1'],
  [/(\.[a-zA-Z0-9_-]+\.min\.(js|css))/g, '.min.$2'],
  [/(\/dist\/v2\/forum\/chunks\/addons\/)[^/]*/g, '$1'],
  [/(\?v=)[^"\\]*/g, '$1'],
];
export default ForumMessageReplacePattern;
