import { DrawingItem } from "./DrawingItem";
import { DrawingLayer } from "./DrawingLayer";
export declare class DrawingLayerManager {
    _arrDrawingLayer: DrawingLayer[];
    createDrawingLayer(baseCvs: HTMLCanvasElement, drawingLayerId: number): DrawingLayer;
    deleteDrawingLayer(drawingLayerId: number): void;
    clearDrawingLayers(): void;
    getDrawingLayer(drawingLayerId: number): DrawingLayer;
    getAllDrawingLayers(): Array<DrawingLayer>;
    getSelectedDrawingItems(): Array<DrawingItem>;
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
    _getFabricCanvas(): fabric.Canvas;
    _switchPointerEvent(): void;
}
