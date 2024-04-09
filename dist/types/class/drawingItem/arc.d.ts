import { Arc } from "dynamsoft-core";
import { DrawingItem } from "./DrawingItem";
export declare class DT_Arc extends DrawingItem {
    #private;
    constructor(arc: Arc, drawingStyleId?: number);
    protected extendSet(property: string, value: any): boolean;
    protected extendGet(property: string): void;
    protected updateCoordinateBaseFromImageToView(): void;
    protected updateCoordinateBaseFromViewToImage(): void;
    setPosition(position: any): void;
    getPosition(): any;
    updatePosition(): void;
    setArc(arc: Arc): void;
    getArc(): Arc;
}
