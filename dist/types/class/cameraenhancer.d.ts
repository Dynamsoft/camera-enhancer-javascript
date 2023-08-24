import { ImageSourceAdapter, IntermediateResultReceiver, EnumImagePixelFormat, Point, DSRect, Rect } from "dynamsoft-core";
import { CameraView } from "./CameraView";
import { VideoDeviceInfo, Warning, DCEFrame, PlayCallbackInfo, Resolution } from "../interface";
import { EnumEnhancedFeatures } from "../enum";
export declare class CameraEnhancer extends ImageSourceAdapter {
    #private;
    /** @ignore */
    static _debug: boolean;
    static set _onLog(value: (message: any) => void);
    static get _onLog(): (message: any) => void;
    /**
     * @ignore
     */
    static browserInfo: {
        browser: string;
        version: number;
        OS: string;
    };
    static onWarning: (warning: Warning) => void;
    /**
     * Detect environment and get a report.
     * ```js
     * console.log(Dynamsoft.DCE.CameraEnhancer.detectEnvironment());
     * // {"wasm":true, "worker":true, "getUserMedia":true, "camera":true, "browser":"Chrome", "version":90, "OS":"Windows"}
     * ```
     */
    static detectEnvironment(): Promise<any>;
    static testCameraAccess(): Promise<{
        ok: boolean;
        message: string;
    }>;
    static createInstance(view?: CameraView): Promise<CameraEnhancer>;
    /**
     * @ignore
     */
    _imageDataGetter: any;
    /**
     * @ignore
     */
    get video(): HTMLVideoElement;
    set videoSrc(src: string);
    get videoSrc(): string;
    set ifSaveLastUsedCamera(value: boolean);
    get ifSaveLastUsedCamera(): boolean;
    set ifSkipCameraInspection(value: boolean);
    get ifSkipCameraInspection(): boolean;
    set singleFrameMode(value: boolean);
    get singleFrameMode(): boolean;
    private _onCameraSelChange;
    private _onResolutionSelChange;
    private _onCloseBtnClick;
    private _onSingleFrameAcquired;
    /**
     * @ignore
     */
    _intermediateResultReceiver: IntermediateResultReceiver;
    /**
     * @ignore
     */
    get _isFetchingStarted(): boolean;
    /**
     * @ignore
     */
    canvasSizeLimit: number;
    /**
     * @ignore
     */
    _imageId: number;
    private fetchInterval;
    get disposed(): boolean;
    readonly isCameraEnhancer = true;
    private constructor();
    setCameraView(view: CameraView): void;
    getCameraView(): CameraView;
    /**
     *
     * @returns
     * @ignore
     */
    releaseCameraView(): void;
    private addListenerToView;
    private removeListenerFromView;
    /**
     *
     * @returns "closed" | "opening" | "open"
     */
    getCameraState(): string;
    isOpen(): boolean;
    getVideoEl(): HTMLVideoElement;
    open(): Promise<PlayCallbackInfo>;
    close(): void;
    pause(): void;
    isPaused(): boolean;
    resume(): Promise<void>;
    selectCamera(videoDeviceInfoOrDeviceId: VideoDeviceInfo | string): Promise<PlayCallbackInfo>;
    getSelectedCamera(): VideoDeviceInfo;
    getAllCameras(): Promise<Array<VideoDeviceInfo>>;
    setResolution(resolution: Resolution): Promise<PlayCallbackInfo>;
    getResolution(): Resolution;
    getAvailableResolutions(): Promise<Array<Resolution>>;
    /**
     *
     * @param event includes
     * @param listener
     * @ignore
     */
    _on(event: string, listener: Function): void;
    /**
     *
     * @param event
     * @param listener
     * @ignore
     */
    _off(event: string, listener: Function): void;
    on(eventName: "cameraOpen" | "cameraClose" | "cameraChange" | "resolutionChange" | "played" | "singleFrameAcquired" | "frameAddedToBuffer", listener: Function): void;
    off(eventName: "cameraOpen" | "cameraClose" | "cameraChange" | "resolutionChange" | "played" | "singleFrameAcquired" | "frameAddedToBuffer", listener: Function): void;
    getVideoSettings(): MediaStreamConstraints;
    updateVideoSettings(mediaStreamConstraints: MediaStreamConstraints): Promise<void>;
    getCapabilities(): MediaTrackCapabilities;
    getCameraSettings(): MediaTrackSettings;
    turnOnTorch(): Promise<void>;
    turnOffTorch(): Promise<void>;
    setColorTemperature(value: number): Promise<void>;
    getColorTemperature(): number;
    setExposureCompensation(value: number): Promise<void>;
    getExposureCompensation(): number;
    /**
     *
     * @param settings
     * @ignore
     */
    _setZoom(settings: {
        factor: number;
        centerPoint?: {
            x: string;
            y: string;
        };
    }): Promise<void>;
    setZoom(settings: {
        factor: number;
    }): Promise<void>;
    getZoomSettings(): {
        factor: number;
    };
    resetZoom(): Promise<void>;
    setFrameRate(value: number): Promise<void>;
    getFrameRate(): number;
    setFocus(settings: {
        mode: string;
    } | {
        mode: "manual";
        distance: number;
    } | {
        mode: "manual";
        area: {
            centerPoint: {
                x: string;
                y: string;
            };
            width?: string;
            height?: string;
        };
    }): Promise<void>;
    getFocusSettings(): Object;
    setAutoZoomRange(range: {
        min: number;
        max: number;
    }): void;
    getAutoZoomRange(): {
        min: number;
        max: number;
    };
    enableEnhancedFeatures(enhancedFeatures: EnumEnhancedFeatures): Promise<void>;
    disableEnhancedFeatures(enhancedFeatures: EnumEnhancedFeatures): void;
    /**
     *
     * @param region
     * @ignore
     */
    _setScanRegion(region: DSRect | Rect): void;
    setScanRegion(region: DSRect | Rect): void;
    getScanRegion(): any;
    hasNextImageToFetch(): boolean;
    startFetching(): void;
    stopFetching(): void;
    fetchImage(): DCEFrame;
    setImageFetchInterval(interval: number): void;
    getImageFetchInterval(): number;
    setPixelFormat(format: EnumImagePixelFormat.IPF_GRAYSCALED | EnumImagePixelFormat.IPF_ABGR_8888 | EnumImagePixelFormat.IPF_ARGB_8888): void;
    getPixelFormat(): EnumImagePixelFormat;
    takePhoto(listener: (dceFrame: DCEFrame) => void): void;
    convertToPageCoordinates(point: Point): Point;
    convertToClientCoordinates(point: Point): Point;
    dispose(): void;
}
//# sourceMappingURL=CameraEnhancer.d.ts.map