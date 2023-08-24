import { DSRect, Rect } from "dynamsoft-core";
import { View } from "./View";
import { EventHandler } from "../utils";
export declare class CameraView extends View {
    #private;
    /**
     * @ignore
     */
    static _onLog: (message: any) => void;
    static uiComponentName: string;
    private static _hasEngineResourceLoaded;
    private static _engineResourcePath?;
    /**
     * ```js
     * Dynamsoft.DCE.CameraEnhancer.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer/dist/";
     * ```
     */
    static set engineResourcePath(value: string);
    static get engineResourcePath(): string;
    private static _defaultUIElementURL;
    /**
     * The url of the default UI.
     * ```js
     * Dynamsoft.DCE.CameraEnhancer.defaultUIElementURL = "https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer/dist/dce.ui.html";
     * let pEnhancer = null;
     * (async()=>{
     *     let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
     *     await enhancer.open(true);
     * })();
     * ```
     * @ignore
     */
    static set defaultUIElementURL(value: string);
    static get defaultUIElementURL(): string;
    static createInstance(elementOrUrl?: HTMLElement | string): Promise<CameraView>;
    /**
     * Transform the coordinates from related to scan region to related to the whole video/image.
     * @param coord The coordinates related to scan region.
     * @param sx The x coordinate of scan region related to the whole video/image.
     * @param sy The y coordinate of scan region related to the whole video/image.
     * @param sWidth The width of scan region.
     * @param sHeight The height of scan region.
     * @param dWidth The width of cropped image. Its value is different from `sWidth` when the image is compressed.
     * @param dHeight The height of cropped image. Its value is different from `sHeight` when the image is compressed.
     * @ignore
     */
    static _transformCoordinates(coord: {
        x: number;
        y: number;
    }, sx: number, sy: number, sWidth: number, sHeight: number, dWidth: number, dHeight: number): void;
    /**
     * @ignore
     */
    eventHandler: EventHandler;
    private UIElement;
    /**
     * @ignore
     */
    containerClassName: string;
    _videoContainer: HTMLDivElement;
    private videoFit;
    /** @ignore */
    _hideDefaultSelection: boolean;
    /** @ignore */
    _divScanArea: any;
    /** @ignore */
    _divScanLight: any;
    /** @ignore */
    _bgLoading: any;
    /** @ignore */
    _selCam: any;
    /** @ignore */
    _bgCamera: any;
    /** @ignore */
    _selRsl: any;
    /** @ignore */
    _optGotRsl: any;
    /** @ignore */
    _btnClose: any;
    /** @ignore */
    _selMinLtr: any;
    /** @ignore */
    _optGotMinLtr: any;
    /** @ignore */
    _cvsSingleFrameMode: HTMLCanvasElement;
    private scanRegion;
    private _drawingLayerOfMask;
    private _maskBackRectStyleId;
    private _maskCenterRectStyleId;
    private regionMaskFillStyle;
    private regionMaskStrokeStyle;
    private regionMaskLineWidth;
    /**
     * @ignore
     */
    _userSetMaskVisible: boolean;
    /**
     * @ignore
     */
    _userSetLaserVisible: boolean;
    private _updateLayersTimeoutId;
    private _updateLayersTimeout;
    /**
     * Trigger when the css dimensions of the container of video element changed, or window changed.
     */
    private _videoResizeListener;
    private _windowResizeListener;
    private _resizeObserver;
    /**
     * @ignore
     */
    set _singleFrameMode(value: boolean);
    get _singleFrameMode(): boolean;
    _onSingleFrameAcquired: (canvas: HTMLCanvasElement) => void;
    private _singleFrameModeIpt;
    _clickIptSingleFrameMode: () => void;
    /**
     * @ignore
     */
    extraBindings: Array<(el: Element) => void>;
    /**
     * @ignore
     */
    _ddnUnverifiedResultsStyle: any;
    /**
     * @ignore
     */
    _styleIdsOfUnverifiedResults: any;
    _capturedResultReceiver: any;
    get disposed(): boolean;
    private constructor();
    private _setUIElement;
    setUIElement(elementOrUrl: HTMLElement | string): Promise<void>;
    getUIElement(): HTMLElement;
    _bindUI(): void;
    /** @ignore */
    _unbindUI(): void;
    _startLoading(): void;
    _stopLoading(): void;
    _renderCamerasInfo(curCamera: {
        deviceId: string;
        label: string;
    }, cameraList: Array<{
        deviceId: string;
        label: string;
    }>): void;
    _renderResolutionInfo(curResolution: {
        width: number;
        height: number;
    }): void;
    getVideoElement(): HTMLVideoElement;
    isVideoLoaded(): boolean;
    setVideoFit(value: "contain" | "cover"): void;
    getVideoFit(): "contain" | "cover";
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
     * @param contentDimensions
     * @ignore
     */
    updateConvertedRegion(contentDimensions: {
        width: number;
        height: number;
    }): void;
    /**
     *
     * @returns
     * @ignore
     */
    getConvertedRegion(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    /**
     *
     * @param region
     * @returns
     * @ignore
     */
    setScanRegion(region: DSRect | Rect): void;
    /**
     *
     * @returns
     * @ignore
     */
    getScanRegion(): any;
    getVisibleRegionOfVideo(options: {
        inPixels?: boolean;
    }): Rect;
    private setScanRegionMask;
    private clearScanRegionMask;
    /**
     *
     * @ignore
     */
    deleteScanRegionMask(): void;
    /**
     *
     * @param visible
     * @ignore
     */
    _setScanRegionMaskVisible(visible: boolean): void;
    setScanRegionMaskVisible(visible: boolean): void;
    isScanRegionMaskVisible(): boolean;
    setScanRegionMaskStyle(style: any): void;
    getScanRegionMaskStyle(): {
        fillStyle: string;
        strokeStyle: string;
        lineWidth: number;
    };
    /**
     *
     * @param visible
     * @ignore
     */
    _setScanLaserVisible(visible: boolean): void;
    setScanLaserVisible(visible: boolean): void;
    isScanLaserVisible(): boolean;
    /**
     *
     * @returns
     * @ignore
     */
    _updateVideoContainer(): void;
    /**
     * @ignore
     */
    updateLayers(): void;
    /**
     * @ignore
     */
    _clearInnerDrawingItems(): void;
    /**
     * Remove added elements. Remove event listeners.
     */
    dispose(): void;
}
//# sourceMappingURL=CameraView.d.ts.map