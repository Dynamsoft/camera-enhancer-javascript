import { DSImageData } from "dynamsoft-core";
import { View } from "./View";
import DrawingLayer from "./drawinglayer";
export declare class ImageEditorView extends View {
    #private;
    static createInstance(elementOrUrl?: HTMLElement | string): Promise<ImageEditorView>;
    private UIElement;
    /**
     * @ignore
     */
    containerClassName: string;
    get disposed(): boolean;
    private constructor();
    private _setUIElement;
    setUIElement(elementOrUrl: HTMLElement | string): Promise<void>;
    getUIElement(): HTMLElement;
    _bindUI(): void;
    /** @ignore */
    _unbindUI(): void;
    /**
     * @ignore
     */
    setImage(image: Uint8Array | Uint8ClampedArray | HTMLCanvasElement | HTMLImageElement, width: number, height: number): void;
    /**
     *
     * @returns
     * @ignore
     */
    getImage(): HTMLCanvasElement;
    /**
     *
     * @returns
     * @ignore
     */
    clearImage(): void;
    /**
     *
     * @returns
     * @ignore
     */
    removeImage(): void;
    setOriginalImage(img: DSImageData | HTMLCanvasElement | HTMLImageElement): void;
    getOriginalImage(): DSImageData | HTMLCanvasElement | HTMLImageElement;
    /**
     * Decide What dimensions the layers should be created.
     * @returns
     */
    protected getContentDimensions(): {
        width: number;
        height: number;
        objectFit: string;
    };
    /**
     *
     * @param width
     * @param height
     * @param objectFit
     * @param drawingLayerId
     * @returns
     * @ignore
     */
    _createDrawingLayer(width?: number, height?: number, objectFit?: string, drawingLayerId?: number): DrawingLayer;
    dispose(): void;
}
//# sourceMappingURL=ImageEditorView.d.ts.map