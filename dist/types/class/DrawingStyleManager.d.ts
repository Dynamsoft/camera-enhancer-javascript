import { DrawingStyle } from "../interface";
export declare class DrawingStyleManager {
    #private;
    static createDrawingStyle(styleDefinition: DrawingStyle): number;
    private static _getDrawingStyle;
    static getDrawingStyle(styleId: number): DrawingStyle;
    static getDrawingStyles(): Array<DrawingStyle>;
    private static _updateDrawingStyle;
    static updateDrawingStyle(styleId: number, styleDefinition: DrawingStyle): void;
}
//# sourceMappingURL=DrawingStyleManager.d.ts.map