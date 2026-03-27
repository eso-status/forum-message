import { SourceUrl } from './type/sourceUrl.type';
import { MessageType } from './type/messageType.type';
import Raw from './raw';
import { EsoStatusRawData } from './interface/esoStatusRawData.interface';

import axios, { AxiosResponse } from 'axios';
import { MessagePatternType } from './type/messagePattern.type';
import ForumMessagePtsUrl from './const/ForumMessagePtsUrl.const';
import {
  ServerPcEuSlug,
  ServerPcNaSlug,
  ServerPcPtsSlug,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerXboxEuSlug,
  ServerXboxNaSlug,
  ServiceStoreEsoSlug,
  ServiceSystemAccountSlug,
  ServiceWebSiteSlug,
  Slug,
} from '@eso-status/types';
import MessageSanitizePattern from './pattern/message/messageSanitize.pattern';
import MessageFilterPattern from './pattern/message/messageFilter.pattern';
import ForumMessagePtsReplacePattern from './pattern/content/forumMessagePtsReplace.pattern';
import ForumMessageReplacePattern from './pattern/content/forumMessageReplace.pattern';

/**
 * Class for retrieving information from announcements
 */
export default class Connector {
  /**
   * List of raw data from announcements
   */
  public raw: string[] = [];

  /**
   * List of information from announcements
   */
  public rawEsoStatus: EsoStatusRawData[] = [];

  /**
   * Sanitized remote content to compare changes between two versions
   * @private
   */
  private sanitizedRemoteContent = '';

  /**
   * Patterns that matched the raw messages from the data source
   */
  public patterns: MessagePatternType[] = [];

  /**
   * List of information from announcements by zone
   * @private
   */
  private messagesZones: string[] = [];

  /**
   * List of raw data from announcements
   * @private
   */
  private messages: string[] = [];

  /**
   * List of sanitized data from announcements
   * @private
   */
  private sanitizedMessages: string[] = [];

  /**
   * @param url URL used as the source to retrieve announcements
   * @param remoteContent Content of the source retrieved via URL
   */
  constructor(
    private readonly url: SourceUrl,
    private readonly remoteContent: string,
  ) {
    this.sanitizedRemoteContent = this.remoteContent;
    this.cleanRemoteContent();
    this.getMessages();
    this.split();
    this.sanitize();
    this.filter();
    this.fetch();
    this.generatePatternList();
  }

  /**
   * Method for creating an instance of the connector via a URL
   * @param url URL used as the source to retrieve announcements
   */
  public static async init(url: SourceUrl): Promise<Connector> {
    return new Connector(url, await Connector.getRemoteContent(url));
  }

  /**
   * Method for retrieving remote content via a URL
   * @param url URL serving as the source for retrieving announcements
   * @private
   */
  private static async getRemoteContent(url: string): Promise<string> {
    const response: AxiosResponse<string> = await axios.get<string>(url);

    return response.status === 200 && !!response.data ? response.data : '';
  }

  /**
   * Get a sanitized remote content to compare changes between two versions
   * @private
   */
  private cleanRemoteContent(): void {
    for (const [pattern, replacement] of ForumMessageReplacePattern) {
      this.sanitizedRemoteContent = this.sanitizedRemoteContent.replace(
        pattern,
        replacement.toString(),
      );
    }

    if (this.url === ForumMessagePtsUrl) {
      for (const [pattern, replacement] of ForumMessagePtsReplacePattern) {
        this.sanitizedRemoteContent = this.sanitizedRemoteContent.replace(
          pattern,
          replacement.toString(),
        );
      }
    }
  }

  /**
   * Method for retrieving raw announcements for all announcement levels
   * @private
   */
  private getMessages(): void {
    ['AlertMessage', 'WarningMessage'].forEach((type: MessageType): void => {
      this.getMessagesByType(type);
    });
  }

  /**
   * Method for retrieving raw announcements based on the announcement level
   * @private
   */
  private getMessagesByType(type: MessageType): void {
    [
      ...this.remoteContent.matchAll(
        new RegExp(
          `<div class="DismissMessage ${type}">([\\s\\S]*?)<\\/div>`,
          'g',
        ),
      ),
    ]
      .map(match => match[1])
      .forEach((item: string): void => {
        this.messagesZones.push(item);
      });
  }

  /**
   * Method for separating each announcement message
   */
  private split(): void {
    this.messagesZones.forEach((messagesZone: string): void => {
      this.messages.push(...messagesZone.split(/<br\s*\/?>/i));
    });
  }

  /**
   * Method for formatting the raw data of retrieved announcements
   * @private
   */
  private sanitize(): void {
    this.sanitizedMessages = this.messages.map((message: string): string => {
      for (const [pattern, replacement] of MessageSanitizePattern) {
        message = message.replace(pattern, replacement.toString());
      }

      return message;
    });
  }

  /**
   * Method for removing unnecessary announcements
   * @private
   */
  private filter(): void {
    this.raw = this.sanitizedMessages.filter((message: string): boolean => {
      return (
        MessageFilterPattern.filter((pattern: RegExp): boolean =>
          pattern.test(message),
        ).length === 0
      );
    });
  }

  /**
   * Method for analyzing each announcement
   * @private
   */
  private fetch(): void {
    this.raw.forEach((raw: string): void => {
      this.fetchEach(raw);
    });
  }

  /**
   * Method for retrieving the information contained in an announcement
   * @param raw Raw data of the announcement
   * @private
   */
  private fetchEach(raw: string): void {
    new Raw(this.url, raw).matches.forEach((match: EsoStatusRawData): void => {
      this.rawEsoStatus.push(match);
    });
  }

  /**
   * Method to get all patterns
   * @private
   */
  private generatePatternList(): void {
    [
      ServerPcEuSlug,
      ServerPcNaSlug,
      ServerPcPtsSlug,
      ServerPsEuSlug,
      ServerPsNaSlug,
      ServerXboxEuSlug,
      ServerXboxNaSlug,
      ServiceStoreEsoSlug,
      ServiceSystemAccountSlug,
      ServiceWebSiteSlug,
    ].forEach((slug: Slug): void => {
      this.rawEsoStatus.forEach((rawEsoStatus: EsoStatusRawData): void => {
        if (rawEsoStatus.slug === slug) {
          if (!this.patterns.includes(rawEsoStatus.pattern)) {
            this.patterns.push(rawEsoStatus.pattern);
          }
        }
      });
    });
  }
}
