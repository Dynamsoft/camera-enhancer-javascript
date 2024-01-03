import { DT_Polygon } from "./polygon";
import { LineSegment, Polygon } from "@dynamsoft/dynamsoft-core";
export declare class DT_Line extends DT_Polygon {
    #private;
    constructor(line: LineSegment, drawingStyleId?: number);
    protected extendSet(property: string, value: any): boolean;
    protected extendGet(property: string): any;
    protected updateCoordinateBaseFromImageToView(): void;
    protected updateCoordinateBaseFromViewToImage(): void;
    setPosition(position: any): void;
    getPosition(): any;
    updatePosition(): void;
    /**
     * @ignore
     */
    setPolygon(): void;
    /**
     * @ignore
     */
    getPolygon(): Polygon;
    setLine(line: LineSegment): void;
    getLine(): LineSegment;
}
//# sourceMappingURL=line.d.ts.map