import { SourceUrlForumMessageType } from './sourceUrlForumMessage.type';
import { SourceUrlForumMessagePtsType } from './sourceUrlForumMessagePts.type';
/**
 * Different URLs serving as sources for retrieving maintenance announcements
 */
export type SourceUrl =
  | SourceUrlForumMessageType
  | SourceUrlForumMessagePtsType;
