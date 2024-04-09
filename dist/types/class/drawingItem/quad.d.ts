import { Polygon, Quadrilateral } from "dynamsoft-core";
import { DT_Polygon } from "./Polygon";
export declare class DT_Quad extends DT_Polygon {
    #private;
    constructor(quad: Quadrilateral, drawingStyleId?: number);
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
    setQuad(quad: Quadrilateral): void;
    getQuad(): Quadrilateral;
}
