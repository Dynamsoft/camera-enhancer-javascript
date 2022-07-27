import { DrawingItem } from "./drawingitem";
import { Point } from "../../interface/point";
export declare class DT_Line extends DrawingItem {
    constructor(startPoint: Point, endPoint: Point, styleId?: number);
    protected _extendSet(property: string, value: any): boolean;
    protected _extendGet(property: string): any;
}
//# sourceMappingURL=dt_line.d.ts.map