export declare class DrawingItem {
    static arrMediaTypes: string[];
    static arrStyleSelectors: string[];
    protected _fabricObject: fabric.Object;
    _mediaType: string;
    get mediaType(): string;
    styleSelector: string;
    styleId?: number;
    _zIndex?: number;
    _drawingLayer: any;
    _drawingLayerId: number;
    get drawingLayerId(): number;
    _mapStyle: Map<string, any>;
    protected mapEvents: Map<string, Function[]>;
    readonly isDrawingItem: boolean;
    constructor(fabricObject: fabric.Object, styleId?: number);
    private _setFabricObject;
    _getFabricObject(): fabric.Object;
    on(event: string, callback: () => void, _innerUse?: boolean): void;
    off(event: string, callback: () => void): void;
    _setEditable(editable: boolean): void;
    protected _extendSet(property: string, value: any): boolean;
    protected _extendGet(property: string): any;
    set(property: string, value: any): void;
    get(property: any): any;
}
//# sourceMappingURL=drawingitem.d.ts.map