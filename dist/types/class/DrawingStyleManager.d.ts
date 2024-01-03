import { DrawingStyle } from "../interface";
export declare class DrawingStyleManager {
    #private;
    static STYLE_BLUE_STROKE: number;
    static STYLE_GREEN_STROKE: number;
    static STYLE_ORANGE_STROKE: number;
    static STYLE_YELLOW_STROKE: number;
    static STYLE_BLUE_STROKE_FILL: number;
    static STYLE_GREEN_STROKE_FILL: number;
    static STYLE_ORANGE_STROKE_FILL: number;
    static STYLE_YELLOW_STROKE_FILL: number;
    static STYLE_BLUE_STROKE_TRANSPARENT: number;
    static STYLE_GREEN_STROKE_TRANSPARENT: number;
    static STYLE_ORANGE_STROKE_TRANSPARENT: number;
    static USER_START_STYLE_ID: number;
    static createDrawingStyle(styleDefinition: DrawingStyle): number;
    private static _getDrawingStyle;
    static getDrawingStyle(styleId: number): DrawingStyle;
    static getDrawingStyles(): Array<DrawingStyle>;
    private static _updateDrawingStyle;
    static updateDrawingStyle(styleId: number, styleDefinition: DrawingStyle): void;
}
//# sourceMappingURL=DrawingStyleManager.d.ts.map