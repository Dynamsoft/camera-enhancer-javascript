import { fabric } from "dm-fabric";
import { DrawingItem } from "./drawingitem";
import { Polygon } from "@dynamsoft/dynamsoft-core";
export declare function polygonPositionHandler(dim: any, finalMatrix: any, fabricObject: any): fabric.Point;
export declare function actionHandler(eventData: any, transform: any, x: any, y: any): boolean;
export declare function anchorWrapper(anchorIndex: any, fn: any): (eventData: any, transform: any, x: any, y: any) => any;
export declare class DT_Polygon extends DrawingItem {
    #private;
    constructor(polygon: Polygon, drawingStyleId?: number);
    protected extendSet(property: string, value: any): boolean;
    protected extendGet(property: string): any;
    protected updateCoordinateBaseFromImageToView(): void;
    protected updateCoordinateBaseFromViewToImage(): void;
    setPosition(position: any): void;
    getPosition(): any;
    updatePosition(): void;
    setPolygon(polygon: Polygon): void;
    getPolygon(): Polygon;
}
//# sourceMappingURL=polygon.d.ts.map