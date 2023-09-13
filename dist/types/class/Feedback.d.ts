import { Howl } from "dm-howler";
export declare class Feedback {
    #private;
    /**
     * @ignore
     */
    static vibrateDuration: number;
    /** @ignore */
    static beepSound: Howl;
    /**
     * @ignore
     */
    static get soundSource(): string;
    static set soundSource(value: string);
    static vibrate(): void;
    static beep(): void;
}
//# sourceMappingURL=Feedback.d.ts.map