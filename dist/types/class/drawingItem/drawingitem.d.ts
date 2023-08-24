import { Note, DrawingItemEvent } from "../../interface";
import { EnumDrawingItemState, EnumDrawingItemMediaType } from "../../enum";
export declare enum EnumItemType {
    ARC = "arc",
    IMAGE = "image",
    LINE = "line",
    POLYGON = "polygon",
    QUAD = "quad",
    RECT = "rect",
    TEXT = "text",
    GROUP = "group"
}
export declare enum EnumItemState {
    DEFAULT = "default",
    SELECTED = "selected"
}
export declare abstract class DrawingItem {
    #private;
    static arrMediaTypes: string[];
    static mapItemType: Map<EnumItemType, string>;
    static arrStyleSelectors: string[];
    static mapItemState: Map<EnumItemState, string>;
    protected _fabricObject: fabric.Object;
    /**
     * @ignore
     */
    _mediaType: string;
    get mediaType(): EnumDrawingItemMediaType;
    get styleSelector(): string;
    /**
     * @ignore
     */
    styleId?: number;
    set drawingStyleId(id: number);
    get drawingStyleId(): number;
    set coordinateBase(base: "view" | "image");
    get coordinateBase(): "view" | "image";
    _zIndex?: number;
    _drawingLayer: any;
    _drawingLayerId: number;
    get drawingLayerId(): number;
    _mapStyle: Map<string, any>;
    _mapState_StyleId: Map<string, number>;
    protected mapEvent_Callbacks: Map<string, Map<Function, Function>>;
    protected mapNoteName_Content: Map<string, Array<any>>;
    readonly isDrawingItem: boolean;
    constructor(fabricObject?: fabric.Object, drawingStyleId?: number);
    protected _setFabricObject(fabricObject: fabric.Object): void;
    _getFabricObject(): fabric.Object;
    /**
     *
     * @param state
     * @ignore
     */
    setState(state: EnumDrawingItemState): void;
    getState(): EnumDrawingItemState;
    _on(eventName: string, listener: (event: DrawingItemEvent) => void): void;
    on(eventName: "mousedown" | "mouseup" | "dblclick" | "mouseover" | "mouseout", listener: (event: DrawingItemEvent) => void): void;
    _off(eventName: string, listener: (event: DrawingItemEvent) => void): void;
    off(eventName: "mousedown" | "mouseup" | "dblclick" | "mouseover" | "mouseout", listener: (event: DrawingItemEvent) => void): void;
    _setEditable(editable: boolean): void;
    hasNote(name: string): boolean;
    addNote(note: Note, replace?: boolean): void;
    getNote(name: string): Note;
    getNotes(): Array<Note>;
    updateNote(name: string, content: any, mergeContent?: boolean): void;
    deleteNote(name: string): void;
    clearNotes(): void;
    protected abstract extendSet(property: string, value: any): boolean;
    protected abstract extendGet(property: string): any;
    /**
     *
     * @param property
     * @returns
     * @ignore
     */
    set(property: string, value: any): void;
    /**
     *
     * @param property
     * @returns
     * @ignore
     */
    get(property: string): any;
    /**
     * @ignore
     */
    remove(): void;
    /**
     * Convert item's property(width, height, x, y, etc.) from related to image/video to related to view/page.
     * @param value
     * @returns
     */
    protected convertPropFromImageToView(value: number): number;
    /**
     * Convert item's property(width, height, x, y, etc.) from related to view/page to related to image/video.
     * @param value
     * @returns
     */
    protected convertPropFromViewToImage(value: number): number;
    protected abstract updateCoordinateBaseFromImageToView(): void;
    protected abstract updateCoordinateBaseFromViewToImage(): void;
    /**
     * @ignore
     */
    _setLineWidth(value: number): void;
    /**
     * @ignore
     */
    _getLineWidth(): number;
    /**
     * @ignore
     */
    _setFontSize(value: number): void;
    /**
     * @ignore
     */
    _getFontSize(): number;
    /**
     * @ignore
     */
    abstract setPosition(position: any): void;
    /**
     * @ignore
     */
    abstract getPosition(): any;
    /**
     * Update item's propertys(width, height, x, y, etc.).
     * It is called when item is added to layer.
     * @ignore
     */
    abstract updatePosition(): void;
}
//# sourceMappingURL=drawingitem.d.ts.map