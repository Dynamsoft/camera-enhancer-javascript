import { Rect } from "dynamsoft-core";
import { DrawingItem } from "./DrawingItem";
export declare class DT_Text extends DrawingItem {
    #private;
    private _text;
    constructor(text: string, rect: Rect, drawingStyleId?: number);
    protected extendSet(property: string, value: any): boolean;
    protected extendGet(property: string): any;
    protected updateCoordinateBaseFromImageToView(): void;
    protected updateCoordinateBaseFromViewToImage(): void;
    setPosition(position: any): void;
    getPosition(): any;
    updatePosition(): void;
    setText(text: string): void;
    getText(): string;
    setTextRect(rect: Rect): void;
    getTextRect(): Rect;
}
