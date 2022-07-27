import { DrawingItem } from "./drawingitem";
import { Point } from "../../interface/point";
export declare class DT_Polygon extends DrawingItem {
    constructor(vertices: Array<Point>, styleId?: number);
    protected _extendSet(property: string, value: any): boolean;
    protected _extendGet(property: string): any;
}
//# sourceMappingURL=dt_polygon.d.ts.map