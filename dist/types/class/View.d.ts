import DrawingLayer from "./drawinglayer";
import { DrawingLayersManager } from "./drawinglayermanager";
import { InnerComponent } from "./InnerComponent";
import { DT_Text } from "./drawingItem";
import { TipConfig } from "../interface";
declare class DT_Tip extends DT_Text {
    #private;
    constructor(text: string, x: number, y: number, width: number, styleId?: number);
    /**
     * Make the tip hidden after a period of time.
     * @param duration if less then 0, it clears the timer.
     */
    setDuration(duration: number): void;
    getDuration(): number;
}
export declare abstract class View {
    #private;
    /**
     * @ignore
     */
    _innerComponent: InnerComponent;
    /** @ignore */
    _drawingLayersManager: DrawingLayersManager;
    /** @ignore */
    _layerBaseCvs: HTMLCanvasElement;
    /** @ignore */
    _drawingLayerOfTip: DrawingLayer;
    private _tipStyleId;
    /** @ignore */
    _tip: DT_Tip;
    constructor();
    protected abstract getContentDimensions(): {
        width: number;
        height: number;
        objectFit: string;
    };
    protected createDrawingLayerBaseCvs(width: number, height: number, objectFit?: string): HTMLCanvasElement;
    /**
     *
     * @param width
     * @param height
     * @param objectFit
     * @param drawingLayerId
     * @returns
     * @ignore
     */
    _createDrawingLayer(drawingLayerId: number, width?: number, height?: number, objectFit?: string): DrawingLayer;
    createDrawingLayer(): DrawingLayer;
    protected deleteDrawingLayer(drawingLayerId: number): void;
    deleteUserDefinedDrawingLayer(id: number): void;
    /**
     * @ignore
     */
    _clearDrawingLayers(): void;
    clearUserDefinedDrawingLayers(): void;
    getDrawingLayer(drawingLayerId: number): DrawingLayer;
    /**
     *
     * @returns
     * @ignore
     */
    getAllDrawingLayers(): Array<DrawingLayer>;
    protected updateDrawingLayers(contentDimensions: {
        width: number;
        height: number;
        objectFit: string;
    }): void;
    getSelectedDrawingItems(): any[];
    setTipConfig(tipConfig: TipConfig): void;
    getTipConfig(): TipConfig;
    setTipVisible(visible: boolean): void;
    isTipVisible(): boolean;
    updateTipMessage(message: string): void;
}
export {};
//# sourceMappingURL=View.d.ts.map