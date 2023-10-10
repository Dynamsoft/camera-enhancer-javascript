import DrawingLayer from "./drawinglayer";
import { DrawingStyle } from "../interface/drawingstyle";
export declare class DrawingLayersManager {
    _arrDrawingLayer: DrawingLayer[];
    private _mapDrawingStyles;
    private _defaultStyleTemplate;
    createDrawingStyle(styleDefinition: DrawingStyle): number;
    private _getDrawingStyle;
    getDrawingStyle(styleId: number): DrawingStyle;
    getDrawingStyles(): Array<DrawingStyle>;
    private _updateDrawingStyle;
    updateDrawingStyle(styleId: number, styleDefinition: DrawingStyle): void;
    createDrawingLayer(baseCvs: HTMLCanvasElement, drawingLayerId?: number): DrawingLayer;
    deleteDrawingLayer(drawingLayerId: number): void;
    clearDrawingLayers(): void;
    getDrawingLayer(drawingLayerId: number): DrawingLayer;
    getDrawingLayers(): Array<DrawingLayer>;
    getSelectedDrawingItems(): any[];
    setDimensions(dimensions: {
        width: number | string;
        height: number | string;
    }, options?: {
        backstoreOnly?: boolean;
        cssOnly?: boolean;
    }): void;
    setObjectFit(value: string): void;
    getObjectFit(): string;
    setVisible(visible: boolean): void;
    _switchPointerEvent(): void;
}
//# sourceMappingURL=drawinglayermanager.d.ts.map