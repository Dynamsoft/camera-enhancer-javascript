import DrawingLayer from "./drawinglayer";
export declare class DrawingLayersManager {
    _arrDrawingLayer: DrawingLayer[];
    createDrawingLayer(baseCvs: HTMLCanvasElement, drawingLayerId: number): DrawingLayer;
    deleteDrawingLayer(drawingLayerId: number): void;
    clearDrawingLayers(): void;
    getDrawingLayer(drawingLayerId: number): DrawingLayer;
    getAllDrawingLayers(): Array<DrawingLayer>;
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