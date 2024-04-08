export declare class EventHandler {
    #private;
    get disposed(): boolean;
    on(event: string, listener: Function): void;
    off(event: string, listener: Function): void;
    offAll(event: string): void;
    fire(event: string, params?: Array<any>, options?: {
        target?: object;
        async?: boolean;
        copy?: boolean;
    }): Promise<void>;
    dispose(): void;
}
