const MessageSanitizePattern: (string | RegExp)[][] = [
  [/^\n+/, ''],
  [/ 。 /g, ''],
  [/[•·]\s*/g, ''],
  [
    /\. Please check here for status updates: <a href="[^"]*" rel="nofollow">[^<]*<\/a>/g,
    '',
  ],
  [/\. Thank you for your patience/g, ''],
  [
    /\. If you continue to experience difficulties at login, please restart your client!/g,
    '',
  ],
  [/\. We will update as new information becomes available/g, ''],
  [/\. {2}Please check here for status updates:/g, ''],
  [/\. {2}Thank you for your patience!/g, ''],
  [/\. {2}Thank you for your patience/g, ''],
  [/ <a\s[^>]*>.*?<\/a>/gi, ''],
  [/\.\s*$/, ''],
  [/ $/, ''],
  [/[–—]/g, '-'],
  [/]\t/g, '] '],
  [/\t/g, ''],
];
export default MessageSanitizePattern;
