import { Rect } from "@dynamsoft/dynamsoft-core";
import { DrawingItem } from "./drawingitem";
export declare class DT_Rect extends DrawingItem {
    #private;
    constructor(rect: Rect, drawingStyleId?: number);
    protected extendSet(property: string, value: any): boolean;
    protected extendGet(property: string): void;
    protected updateCoordinateBaseFromImageToView(): void;
    protected updateCoordinateBaseFromViewToImage(): void;
    setPosition(position: any): void;
    getPosition(): any;
    updatePosition(): void;
    setRect(rect: Rect): void;
    getRect(): Rect;
}
//# sourceMappingURL=rect.d.ts.map