import { fabric } from "dm-fabric";
import { DrawingItem } from "./drawingitem";
import { Point } from "../../interface/point";
export declare function polygonPositionHandler(dim: any, finalMatrix: any, fabricObject: any): fabric.Point;
export declare function actionHandler(eventData: any, transform: any, x: any, y: any): boolean;
export declare function anchorWrapper(anchorIndex: any, fn: any): (eventData: any, transform: any, x: any, y: any) => any;
export declare class DT_Polygon extends DrawingItem {
    constructor(vertices: Array<Point>, styleId?: number);
    protected _extendSet(property: string, value: any): boolean;
    protected _extendGet(property: string): any;
}
//# sourceMappingURL=dt_polygon.d.ts.map