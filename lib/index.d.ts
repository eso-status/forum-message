import { RawEsoStatus } from '@eso-status/types';
/**
 * Class of Forum Message
 */
export declare class ForumMessage {
    /**
       * Methode used to get Forum Message data
       *
       * @public
       * @static
       *
       * @return Promise<RawEsoStatus[]> Forum Message elements
       */
    static getData(): Promise<RawEsoStatus[]>;
}
