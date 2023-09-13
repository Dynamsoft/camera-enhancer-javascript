export declare class EventHandler {
    #private;
    get disposed(): boolean;
    on(event: string, listener: Function): void;
    off(event: string, listener: Function): void;
    offAll(event: string): void;
    fire(event: string, params?: Array<any>, options?: {
        target?: Object;
        async?: boolean;
    }): Promise<void>;
    dispose(): void;
}
//# sourceMappingURL=EventHandler.d.ts.map