import { Polygon, Quadrilateral } from "@dynamsoft/dynamsoft-core";
import { DT_Polygon } from "./polygon";
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
//# sourceMappingURL=quad.d.ts.map