import { Point } from "dynamsoft-core";
export interface TipConfig {
    topLeftPoint: Point;
    width: number;
    duration: number;
    coordinateBase?: "view" | "image";
}
