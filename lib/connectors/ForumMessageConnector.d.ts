import { RawEsoStatus } from '@eso-status/types-dev';
/**
 * Connector used to get data from https://forums.elderscrollsonline.com/ and https://forums.elderscrollsonline.com/en/categories/pts
 */
export default class ForumMessageConnector {
    /**
     * URLs to get remote content
     *
     * @public
     * @static
     *
     * @return string[] URLs to get remote content
     */
    static urls: string[];
    /**
     * Methode used to get the list of raw element from remote website
     *
     * @public
     * @static
     *
     * @return Promise<RawEsoStatus[]> List of raw element from remote website
     */
    static getRemoteContent(): Promise<RawEsoStatus[]>;
    /**
     * Methode used to get the list of raw element from remote specific url
     *
     * @public
     * @static
     *
     * @param url string Url to use to get list of raw element from remote specific url
     * @return Promise<RawEsoStatus[]> List of raw element from remote specific url
     */
    static getRemoteContentByUrl(url: string): Promise<RawEsoStatus[]>;
    /**
     * Methode used to get raw content from remote specific url
     *
     * @public
     * @static
     *
     * @param url string Url to use to get list of raw element from remote specific url
     * @return Promise<string> Raw content from remote specific url
     */
    static getRawRemoteContent(url: string): Promise<string>;
    /**
     * Methode used to get raw warning message from raw content
     *
     * @public
     * @static
     *
     * @param rawRemoteContent string Raw content from remote specific url
     * @return string Raw warning message from raw content
     */
    static getRawWarningMessage(rawRemoteContent: string): string;
    /**
     * Methode used to get raw alert message from raw content
     *
     * @public
     * @static
     *
     * @param rawRemoteContent string Raw content from remote specific url
     * @return string Raw alert message from raw content
     */
    static getRawAlertMessage(rawRemoteContent: string): string;
    /**
     * Methode used to get merge off all message
     *
     * @public
     * @static
     *
     * @param rawMessages string[] All message
     * @return string Merge off all message
     */
    static mergeRawMessage(...rawMessages: string[]): string;
    /**
     * Methode used to split raw content
     *
     * @public
     * @static
     *
     * @param mergedRawMessage string All message merged
     * @return string[] Split raw content
     */
    static splitRawMessage(mergedRawMessage: string): string[];
    /**
     * Methode used to sort raw content list
     *
     * @public
     * @static
     *
     * @param rawMessageSplit string Split raw content
     * @return string[] Sort raw content list
     */
    static sortRawMessageList(rawMessageSplit: string[]): string[];
    /**
     * Methode used to remove duplicate of raw content
     *
     * @public
     * @static
     *
     * @param remoteContent RawEsoStatus[] List of raw element from remote website
     * @return RawEsoStatus[] Raw content list without duplicate
     */
    static removeDuplicate(remoteContent: RawEsoStatus[]): RawEsoStatus[];
    /**
     * Methode used to get slug for raw content list
     *
     * @public
     * @static
     *
     * @param remoteContent RawEsoStatus[] Raw content list without duplicate
     * @return RawEsoStatus[] Raw content list with slug list
     */
    static getRawContentWithSlug(remoteContent: RawEsoStatus[]): RawEsoStatus[];
    /**
     * Methode used to split list by slug
     *
     * @public
     * @static
     *
     * @param slugOfRawContent RawEsoStatus[] Raw content list with slug list
     * @return RawEsoStatus[] Raw content list foreach slug
     */
    static splitRawContentBySlug(slugOfRawContent: RawEsoStatus[]): RawEsoStatus[];
    /**
     * Methode used to get raw date for raw content list
     *
     * @public
     * @static
     *
     * @param rawContentBySlug RawEsoStatus[] Raw content list foreach slug
     * @return RawEsoStatus[] Raw content list with raw date
     */
    static getRawContentWithRawDate(rawContentBySlug: RawEsoStatus[]): RawEsoStatus[];
    /**
     * Methode used to get data for each raw element
     *
     * @public
     * @static
     *
     * @param rawContentWithRawDate RawEsoStatus[] Raw content list with raw date
     * @return RawEsoStatus[] Raw content list with data
     */
    static getData(rawContentWithRawDate: RawEsoStatus[]): RawEsoStatus[];
    /**
     * Methode used to get data sort by status
     *
     * @public
     * @static
     *
     * @param data RawEsoStatus[] Raw content list with data
     * @return RawEsoStatus[] Data sorted by status
     */
    static sortData(data: RawEsoStatus[]): RawEsoStatus[];
}
