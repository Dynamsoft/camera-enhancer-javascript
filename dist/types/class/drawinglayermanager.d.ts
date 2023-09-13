import DrawingLayer from "./drawinglayer";
export declare class DrawingLayersManager {
    static DDN_LAYER_ID: number;
    static DBR_LAYER_ID: number;
    static DLR_LAYER_ID: number;
    static USER_DEFINED_LAYER_BASE_ID: number;
    _arrDrawingLayer: DrawingLayer[];
    createDrawingLayer(baseCvs: HTMLCanvasElement, drawingLayerId?: number): DrawingLayer;
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