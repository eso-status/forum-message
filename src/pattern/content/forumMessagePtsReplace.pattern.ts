const ForumMessagePtsReplacePattern: (string | RegExp)[][] = [
  [/<tr id="Discussion_[\s\S]*?<\/tr>/g, '<tr></tr>'],
];
export default ForumMessagePtsReplacePattern;
