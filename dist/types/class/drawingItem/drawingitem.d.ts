import { Note } from '../../interface/Note';
import { DrawingItemEvent } from '../../interface/DrawingItemEvent';
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
    protected mapEvent_Callbacks: Map<string, Map<Function, Function>>;
    protected mapNoteName_Content: Map<string, Array<any>>;
    readonly isDrawingItem: boolean;
    constructor(fabricObject: fabric.Object, styleId?: number);
    private _setFabricObject;
    _getFabricObject(): fabric.Object;
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
    protected _extendSet(property: string, value: any): boolean;
    protected _extendGet(property: string): any;
    /**
     * @deprecated
     */
    set(property: string, value: any): void;
    /**
     * @deprecated
     */
    get(property: string): any;
    setAttribute(attribute: string, value: any): void;
    getAttribute(attribute: string): void;
}
