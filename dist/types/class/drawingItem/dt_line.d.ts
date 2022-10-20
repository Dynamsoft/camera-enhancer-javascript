import { DT_Polygon } from "./dt_polygon";
import { Point } from "../../interface/point";
export declare class DT_Line extends DT_Polygon {
    constructor(startPoint: Point, endPoint: Point, styleId?: number);
    protected _extendSet(property: string, value: any): boolean;
    protected _extendGet(property: string): any;
}
//# sourceMappingURL=dt_line.d.ts.map