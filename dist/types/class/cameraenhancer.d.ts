import { PlayCallbackInfo } from '../interface/playcallbackinfo';
import { VideoDeviceInfo } from '../interface/videodeviceinfo';
import { Region } from '../interface/region';
import { DCEFrame } from '../interface/DCEFrame';
import { Area } from '../interface/Area';
import { ImageSource } from '../interface/imagesource';
import { DSImage } from '../interface/dsimage';
import { Controler } from './controler';
import { Warning } from '../interface/warning';
declare type PixelFormat = "grey" | "grey32" | "rgba" | "rbga" | "grba" | "gbra" | "brga" | "bgra";
export default class CameraEnhancer implements ImageSource {
    private static _jsVersion;
    private static _jsEditVersion;
    private static _version;
    /** @ignore */
    static _onLog: (message: any) => void;
    static getVersion(): string;
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
    private static _hasEngineResourceLoaded;
    private static _engineResourcePath?;
    /**
     * ```js
     * Dynamsoft.DCE.CameraEnhancer.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-camera-enhancer/dist/";
     * ```
    */
    static set engineResourcePath(value: string);
    static get engineResourcePath(): string;
    /**
     * Check if storage is available.
     * @ignore
     */
    static isStorageAvailable(type: string): boolean;
    /** @ignore */
    static isDCEFrame(value: any): boolean;
    static testCameraAccess(): Promise<{
        ok: boolean;
        message: string;
    }>;
    private _maxCvsSideLength;
    private _defaultMaxCvsSideLength;
    /** @ignore */
    set maxCvsSideLength(value: number);
    get maxCvsSideLength(): number;
    private _predefinedResolutions;
    private _mapCameraResolutions;
    _bWebGLSupported: boolean;
    static _defaultUIElementURL: string;
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
     */
    static set defaultUIElementURL(value: string);
    static get defaultUIElementURL(): string;
    private _uiOriginalState;
    extraBindings: Array<(el: HTMLElement) => void>;
    /** @ignore */
    private UIElement;
    /**
     * Get HTML element bound to the `CameraEnhancer` instance.
     * @see [[getUIElement]],[[defaultUIElementURL]]
     * @category UI
     */
    getUIElement(): HTMLElement;
    /**
     * Set html element bound to the `CameraEnhancer` instance.
     * ```html
     * <div class="dce-video-container" style="position:relative;width:100%;height:500px;"></div>
     * <script>
     *     let pEnhancer = null;
     *     (async()=>{
     *         let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
     *         await enhancer.setUIElement(document.getElementsByClassName("dce-video-container")[0]);
     *         await enhancer.open(true);
     *     })();
     * </script>
     * ```
     * @param elementOrUrl
     * @see [[getUIElement]],[[defaultUIElementURL]]
     * @category UI
     */
    setUIElement(elementOrUrl: HTMLElement | string): Promise<void>;
    /**
     * @ignore
     */
    appendAndShowUI(): void;
    /**
     * @ignore
     */
    hideUI(): void;
    private _singleFrameMode;
    /**
     * A mode not use video, get a frame from OS camera instead.
     * ```js
     * let pEnhancer = null;
     * (async()=>{
     *     let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
     *     if(enhancer.singleFrameMode){
     *         // the browser does not provide webrtc API, dcejs automatically use singleFrameMode instead
     *         enhancer.open(true);
     *     }
     * })();
     * ```
     */
    get singleFrameMode(): boolean;
    /**
     * A mode not use video, get a frame from OS camera instead.
     * ```js
     * let pEnhancer = null;
     * (async()=>{
     *     let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
     *     enhancer.singleFrameMode = true; // use singleFrameMode anyway
     *     enhancer.open(true);
     * })();
     * ```
     */
    set singleFrameMode(value: boolean);
    private _cvsSingleFrameMode;
    private _originalImageData;
    private _cvsOriginalImage;
    private _imgWidth;
    private _imgHeight;
    private _singleFrameModeIpt;
    private _clickIptSingleFrameMode;
    /** @ignore */
    private styleEls;
    /**
     * Set 'getFrame()' target color mode.
     * Supported vaule: 'rgba', 'rbga', 'grba', 'gbra', 'brga', 'bgra', 'grey'.
     * @deprecated
     */
    set frameColorMode(value: PixelFormat);
    get frameColorMode(): PixelFormat;
    private _framePixelFormat;
    private _defaultFramePixelFormat;
    /**
     * Set 'getFrame()' target color mode.
     * Supported vaule: 'rgba', 'rbga', 'grba', 'gbra', 'brga', 'bgra', 'grey'.
     */
    set framePixelFormat(value: PixelFormat);
    get framePixelFormat(): PixelFormat;
    private mapPixelFormatString_Enum;
    private shaderPixelFormat;
    maxVideoCvsLength: number;
    private _reusedCvs;
    private _reusedWebGLCvs?;
    private _tempDataContainer?;
    private _webGLTexture;
    private _webGLProgramInfo;
    private _webGLBuffers;
    private _softwareScale;
    private _scaleCenter;
    private _focusParameters;
    private _tapFocusEnabled;
    private _focusSupported;
    private _tapDoFocus;
    private _touchMoved;
    private _touchMoveEvent;
    private _recordedStates;
    /**
     * @deprecated
     */
    playCallbackInfo: PlayCallbackInfo;
    private _toCanvas;
    /** @ignore */
    _onCameraSelChange: () => Promise<void>;
    /** @ignore */
    _onResolutionSelChange: () => Promise<void>;
    /** @ignore */
    _onCloseBtnClick: () => void;
    private _bOpen;
    private set bOpen(value);
    readonly isCameraEnhancer: boolean;
    /**
     * @deprecated
     */
    readonly isDisposed: boolean;
    readonly disposed: boolean;
    /**
     * Set src to video element to play static video.
     */
    videoSrc: string | MediaStream | MediaSource | Blob;
    /** @ignore */
    videoSettings: MediaStreamConstraints;
    private iPlayRound;
    private promisePlay;
    /** @ignore */
    private _ifSaveLastUsedCamera;
    /**
     * Whether to record camera you selected after reload the page.
     */
    set ifSaveLastUsedCamera(value: boolean);
    get ifSaveLastUsedCamera(): boolean;
    /**
     * Whether to skip the process of picking a proper rear camera when opening camera the first time.
     */
    ifSkipCameraInspection: boolean;
    /** @ignore */
    _allCameras: VideoDeviceInfo[];
    /** @ignore */
    _currentCamera?: VideoDeviceInfo;
    /** @ignore */
    _videoTrack: MediaStreamTrack;
    /** @ignore */
    _lastDeviceId: string;
    private _vc_bPlayingVideoBeforeHide;
    private _ev_documentHideEvent;
    containerClassName: string;
    private _elContainer;
    private _videoContainer;
    private _video;
    /**
     * The video element the `CameraEnhancer` instance is bound.
     */
    get video(): HTMLVideoElement;
    private videoFit;
    /**
     * Set the CSS property 'object-fit' of the video element.
     * Only 'cover' and 'contain' are allowed.
     * @see [[video]]
     */
    setVideoFit(value: string): void;
    /**
     * Returns the value of the 'object-fit' CSS property of the video element.
     * @see [[video]]
     */
    getVideoFit(): string;
    /**
     * For debug.
     * @ignore
     */
    _showElClassName(): void;
    /**
     * For debug.
     * @ignore
     */
    _hideElClassName(): void;
    /** @ignore */
    _cvsScanRegion: HTMLCanvasElement;
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
    private regionMaskFillStyle;
    private regionMaskStrokeStyle;
    private regionMaskLineWidth;
    private _bShowScanRegionMask;
    /**
     * Whether to show scan region mask.
     * @see [[setScanRegion]],[[getScanRegion]]
     */
    set ifShowScanRegionMask(value: boolean);
    get ifShowScanRegionMask(): boolean;
    private showScanRegionMask;
    private hideScanRegionMask;
    private _bShowScanRegionLaser;
    private _defaultBShowScanRegionLaser;
    /**
     * Whether to show laser in scan region.
     * @see [[setScanRegion]],[[getScanRegion]]
     */
    set ifShowScanRegionLaser(value: boolean);
    get ifShowScanRegionLaser(): boolean;
    showScanRegionLaser(): void;
    hideScanRegionLaser(): void;
    private _checkValidRegion;
    private _scanRegion;
    private set scanRegion(value);
    private _scanRegionOverlayContainer;
    private _arrScanRegionOverlays;
    private _drawingLayersManager;
    private _layerBaseCvs;
    private _drawingLayerOfTip;
    private _tipStyleId;
    private _tipArgs;
    private _hideTipTimeoutId;
    onTipSuggested: (occasion: string, message: string) => void;
    /**
     * Set the scan region.
     * ```js
     * enhancer.setScanRegion({
     *   regionLeft: 0,
     *   regionTop: 25,
     *   regionRight: 100,
     *   regionBottom: 75,
     *   regionMeasuredByPercentage: 1
     * });
     * let dceFrame = enhancer.getFrame();
     * ```
     * @param region
     * @see [[getScanRegion]],[[getFrame]],[[startFetchingLoop]]
     */
    setScanRegion(region: Region): void;
    /**
     * Get the scan region.
     * @see [[setScanRegion]]
     */
    getScanRegion(): Region;
    private _calculateCvsSize;
    /**
     * Add a canvas of the same size as the scan area directly above the scan area.
     * @see [[setScanRegion]],[[getScanRegion]]
     */
    addScanRegionOverlayCanvas(): HTMLCanvasElement;
    removeScanRegionOverlayCanvas(overlay: HTMLCanvasElement): void;
    /**
     * adjust overlay to match'_scanRegion'
     * Might be called when:
     * 1. 'addScanRegionOverlayCanvas' is called;
     * 2. 'scanRegion' is set;
     * 3. camera resolution changes in 'play()';
     * 4. container resizes;
     * 5. 'setVideoFit' is called;
     * 6. 'bOpen' is set to true;
     * 7. '_clickIptSingleFrameMode' is triggered;
     * @param overlay
     * @private
     */
    private _updateScanRegionOverlay;
    private showScanRegionOverlays;
    private hideScanRegionOverlays;
    private _cvsViewDecorator;
    private _decoratorType;
    private _decoratorArea;
    private _viewDecoratorInfo;
    /**
     * Set and show the view decorator.
     * ```js
     * enhancer.setViewDecorator("focus", {x:5, y:5, width: 90, height:90});
     * ```
     * @see [[getViewDecorator]],[[setViewDecoratorLineWidth]],[[setViewDecoratorStrokeStyle]],[[setViewDecoratorFillStyle]],[[setViewDecoratorMaskFillStyle]]
     */
    setViewDecorator(type: "rectangle" | "focus" | "crossline" | "crosshair" | string[], area: Area): void;
    /**
     * Return the view decorator type, area and the decorator itself in a object.
     * @see [[setViewDecorator]]
     */
    getViewDecorator(): Object;
    private showViewDecorator;
    private hideViewDecorator;
    /**
     * Set the line width for drawing the view decorator.
     * @see [[setViewDecorator]]
     */
    setViewDecoratorLineWidth(type: "rectangle" | "focus" | "crossline" | "crosshair", width: number): void;
    /**
     * Set the stroke style for drawing the view decorator.
     * @see [[setViewDecorator]]
     */
    setViewDecoratorStrokeStyle(type: "rectangle" | "focus" | "crossline" | "crosshair", style: string): void;
    /**
     * Set the fill style for drawing the view decorator.
     * @see [[setViewDecorator]]
     */
    setViewDecoratorFillStyle(type: "rectangle" | "focus", style: string): void;
    /**
     * Set the fill style for drawing the mask for the view decorator.
     * @see [[setViewDecorator]]
     */
    setViewDecoratorMaskFillStyle(type: "rectangle" | "focus", style: string): void;
    /**
     * Might be called when:
     * 1. 'setViewDecoratorLineWidth', 'setViewDecoratorStrokeStyle', 'setViewDecoratorFillStyle' or 'setViewDecoratorMaskFillStyle' is called;
     * 2. camera resolution changes in 'play()';
     * 3. container resizes;
     * 4. 'setVideoFit' is called;
     * 5. 'bOpen' is set to true;
     * 6. '_clickIptSingleFrameMode' is triggered;
     * @ignore
     */
    private _updateViewDecorator;
    /**
     * Return a Region object which specifies which part of the original video is shown in the video element.
     * @param inPixels
     * @see [[setVideoFit]],[[getVideoFit]]
     */
    getVisibleRegion(inPixels?: boolean): Region;
    /**
     * Set the styles for the scan region mask.
     * @param style
     * @see [[setScanRegion]],[[getScanRegion]]
     */
    setScanRegionMaskStyle(style: any): void;
    /**
     *
     * @param
     * @returns
     * @ignore
     */
    /**
     * Transfor percentage region to pixel region.
     * @param width width of the whole area
     * @param height width of the whole area
     * @param region target region
     * @returns pixel region
     * @private
     */
    private _getRegionInPixels;
    /**
     * Might be called when:
     * 1. 'bOpen' is set to true;
     * 2. 'scanRegion' is set;
     * 3. camera resolution changes in 'play()';
     * 4. 'setScanRegionMaskStyle()' is called;
     * 5. 'setVideoFit' is called;
     * 6. select a new image in singleFrameMode;
     * 7. container resizes;
     * @ignore
     */
    private _updateScanRegionCanvas;
    /**
     * Might be called when:
     * 1. 'bOpen' is set to true;
     * 2. 'scanRegion' is set;
     * 3. camera resolution changes in 'play()';
     * 4. container resizes;
     * 5. 'setVideoFit' is called;
     * 6. '_clickIptSingleFrameMode' is triggered;
     * @ignore
     */
    private _updateScanAreaDiv;
    private _croppingRegions;
    private _defaultCroppingRegions;
    /**
     * Only be valid when scanRegion is null and startFetchingLoop() is called;
     * Change scan region in turn according to the set array.
     * @see [[croppingRegionIndex]],[[startFetchingLoop]]
     * @deprecated
     */
    set croppingRegions(value: Region[]);
    get croppingRegions(): Region[];
    private bIncreaseRegionIndexAuto;
    private _croppingRegionIndex;
    /**
     * The index of current scan region in cropping region array.
     * @see [[croppingRegions]]
     * @deprecated
     */
    set croppingRegionIndex(index: number);
    get croppingRegionIndex(): number;
    private _loopInterval;
    private _defaultLoopInterval;
    /**
     * The interval the frame fethcing loop runs.
     * @see [[startFetchingLoop]]
     */
    set loopInterval(value: number);
    get loopInterval(): number;
    private _maxNumberOfFramesInBuffer;
    private _defaultMaxNumberOfFramesInBuffer;
    /**
     * The largest number of frames the buffer could store.
     * @see [[numberOfFramesInBuffer]],[[startFetchingLoop]]
     */
    set maxNumberOfFramesInBuffer(value: number);
    get maxNumberOfFramesInBuffer(): number;
    /**
     * Current number of frames in the buffer.
     * @see [[maxNumberOfFramesInBuffer]],[[startFetchingLoop]]
     */
    get numberOfFramesInBuffer(): number;
    private _frameQueue;
    private _frameLoopTimeoutId;
    private _bFetchingLoopStarted;
    private _refreshInterval;
    private _defaultRefreshInterval;
    /**
     * Specify how soon to refresh the buffer when the buffer is full.
     * NOTE that it can be set to 0 (default) or -1 which means
     * 0: When the buffer is full, refresh it at the next loop.
     * -1: When the buffer is full, do nothing at the next loop.
     * @ignore
     */
    set refreshInterval(value: number);
    get refreshInterval(): number;
    private _frameLoopTimeoutId2;
    private _resizeTimeoutId;
    private _updateLayersTimeout;
    private _updateLayers;
    private _resizeObserver;
    /**
     * Create a `CameraEnhancer` object.
     * ```js
     * let pEnhancer = null;
     * (async()=>{
     *     let enhancer = await (pEnhancer = pEnhancer || Dynamsoft.DCE.CameraEnhancer.createInstance());
     * })();
     * ```
     * @param config
     * @see [[dispose]]
     * @category Initialize and Destroy
     */
    static createInstance(config?: any): Promise<CameraEnhancer>;
    private static playVideo;
    private static findBestRearCamera;
    /**
     *
     * @param deviceId
     * @param width
     * @param height
     * @returns
     * @ignore
     */
    play(deviceId?: string, width?: number, height?: number, options?: any): Promise<PlayCallbackInfo>;
    /**
     * Resume the video.
     * @see [[pause]]
     * @category Pause and Resume
     */
    resume(): Promise<void>;
    /**
     * Pause the video. Do not release the camera.
     * ```js
     * enhancer.pause();
     * \\*** a lot of work ***
     * await enhancer.resume();
     * ```
     * @see [[resume]]
     * @category Pause and Resume
     */
    pause(): void;
    /** @ignore */
    _bindUI(): void;
    /** @ignore */
    _unbindUI(): void;
    private _assertOpen;
    /**
     * Bind UI, open the camera and start streaming live video.
     * ```js
     * await enhancer.setUIElement(document.getElementById("my-camera-enhancer"));
     * await enhancer.open(true);
     * ```
     * @param appendOrShowUI  When true, append the UIElement to the DOM at the same time. If the UIElement has been existed in the DOM, make it visible.
     * @fires played,cameraOpen
     * @see [[close]]
     * @category Open and Close
     */
    open(appendOrShowUI?: boolean): Promise<PlayCallbackInfo>;
    /**
     * Stops video streaming, unbind UI and releases the camera.
     * ```js
     * await enhancer.open();
     * enhancer.close();
     * ```
     * @param hideUI  When true, make UIElement hide at the same time.
     * @fires played,cameraClose
     * @see [[open]]
     * @category Open and Close
     */
    close(hideUI?: boolean): void;
    /**
     * @ignore
     */
    stop(): void;
    /**
     * Get infomation of all available cameras on the device.
     * ```js
     * let cameras = await enhancer.getAllCameras();
     * if(cameras.length){
     *     await enhancer.selectCamera(cameras[0]);
     * }
     * ```
     * @category Camera Settings
     */
    getAllCameras(force?: boolean): Promise<VideoDeviceInfo[]>;
    private _renderSelCameraInfo;
    /**
     * Get information about the currently used camera.
     * ```js
     * let camera = enhancer.getSelectedCamera();
     * ```
     * @see [[selectCamera]]
     * @category Camera Settings
     */
    getSelectedCamera(): VideoDeviceInfo;
    /**
     * Choose the camera and play it by its information or devide id.
     * ```js
     * let cameras = await enhancer.getAllCameras();
     * if(cameras.length){
     *     await enhancer.selectCamera(cameras[0]);
     * }
     * ```
     * @param cameraInfoOrDeviceId
     * @fires played,cameraChange
     * @see [[getSelectedCamera]]
     * @category Camera Settings
     */
    selectCamera(cameraInfoOrDeviceId: any): Promise<PlayCallbackInfo>;
    /**
     * Get current camera resolution.
     * ```js
     * let rsl = enhancer.getResolution();
     * if(rsl) console.log(rsl[0] + " x " + rsl[1]);
     * ```
     * @see [[setResolution]]
     * @category Camera Settings
     */
    getResolution(): number[];
    /**
     * Set current camera resolution.
     * ```js
     * await enhancer.setResolution(1920, 1080);
     * ```
     * @param width
     * @param height
     * @fires played,resolutionChange
     * @see [[getResolution]]
     * @category Camera Settings
     */
    setResolution(width: number | number[], height: number): Promise<PlayCallbackInfo>;
    /**
     * Return available resolutions among 160*120, 320*240, 480*360, 640*480, 800*600, 960*720, 1280*720, 1920*1080, 2560*1440, 3840*2160.
     * @ignore
     */
    getResolutions(force?: boolean): Promise<Array<Array<number>>>;
    private readonly mapCameraEvents;
    /**
     * Attach an event handler function for a specified built-in event.
     * Different event handlers could be attached for the same event.
     * ```js
     * const cameraOpenEvent = ()=>{console.log("Camera Open.")};
     * const cameraCloseEvent = ()=>{console.log("Camera Close.")};
     * const cameraChangeEvent = ()=>{console.log("Camera Change.")};
     * const resolutionChangeEvent = ()=>{console.log("Resolution Change.")};
     * const playedEvent = ()=>{console.log("Video Played.")};
     * const singleFrameAcquiredEvent = ()=>{console.log("Single Frame Acquired.")};
     * const frameAddedToBufferEvent = ()=>{console.log("Frame Added To Buffer.")};
     * enhancer.on("cameraOpen", cameraOpenEvent);
     * enhancer.on("cameraClose", cameraCloseEvent);
     * enhancer.on("cameraChange", cameraChangeEvent);
     * enhancer.on("resolutionChange", resolutionChangeEvent);
     * enhancer.on("played", playedEvent);
     * enhancer.on("singleFrameAcquired", singleFrameAcquiredEvent);
     * enhancer.on("frameAddedToBuffer", frameAddedToBufferEvent);
     * ```
     * @see [[off]]
     */
    on(eventName: "cameraOpen" | "cameraClose" | "cameraChange" | "resolutionChange" | "played" | "singleFrameAcquired" | "frameAddedToBuffer", listener: Function): void;
    /**
     * Remove the specified event handler.
     * ```js
     * enhancer.off("cameraOpen", cameraOpenEvent);
     * enhancer.off("cameraClose", cameraCloseEvent);
     * enhancer.off("cameraChange", cameraChangeEvent);
     * enhancer.off("resolutionChange", resolutionChangeEvent);
     * enhancer.off("played", playedEvent);
     * enhancer.off("singleFrameAcquired", singleFrameAcquiredEvent);
     * enhancer.off("frameAddedToBuffer", frameAddedToBufferEvent);
     * ```
     * @see [[on]]
     */
    off(eventName: "cameraOpen" | "cameraClose" | "cameraChange" | "resolutionChange" | "played" | "singleFrameAcquired" | "frameAddedToBuffer", listener: Function): void;
    /**
     * Remove event handlers of specified type.
     * @param eventName
     * @see [[on]]
     */
    offAll(eventName?: string): void;
    /**
     * Get current video settings.
     * @category Camera Settings
     */
    getVideoSettings(): MediaStreamConstraints;
    /**
     * Modify and update video settings.
     * ```js
     * await enhancer.updateVideoSettings({ video: {width: {ideal: 1280}, height: {ideal: 720}, facingMode: {ideal: 'environment'}} });
     * ```
     * @param MediaStreamConstraints
     * @category Camera Settings
     */
    updateVideoSettings(mediaStreamConstraints: any): Promise<PlayCallbackInfo | void>;
    /**
     * Check if the camera is open.
     * @category Open and Close
     * @see [[open]],[[close]]
     */
    isOpen(): boolean;
    /**
     * Get the camera capabilities. Unavailable in Firefox.
     * Only available when the camera is open.
     * More information:
     * https://developer.mozilla.org/en-US/docs/Web/API/InputDeviceInfo/getCapabilities
     * ```
     * > enhancer.getCapabilities()
     * < {
     *   "aspectRatio":{"max":3840,"min":0.000462962962962963},
     *   "colorTemperature":{max: 7000, min: 2850, step: 50},
     *   "deviceId":"1e...3af7",
     *   "exposureCompensation": {max: 2.0000040531158447, min: -2.0000040531158447, step: 0.16666699945926666},
     *   "exposureMode":["continuous","manual"],
     *   "facingMode":["environment"],
     *   "focusMode":["continuous","single-shot","manual"],
     *   "frameRate":{"max":30,"min":0},
     *   "groupId":"71...a935",
     *   "height":{"max":2160,"min":1},
     *   "resizeMode":["none","crop-and-scale"],
     *   "torch":true,
     *   "whiteBalanceMode":["continuous","manual"],
     *   "width":{"max":3840,"min":1},
     *   "zoom":{max: 606, min: 100, step: 2}
     * }
     * ```
     * @see [[turnOnTorch]],[[turnOffTorch]],[[setColorTemperature]],[[setExposureCompensation]],[[setZoom]],[[setFrameRate]],[[getFrameRate]],[[setFocus]],[[getFocus]]
     * @category Camera Settings
     */
    getCapabilities(): MediaTrackCapabilities;
    /**
     * See:
     * https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings
     * @ignore
     * */
    getCameraSettings(): MediaTrackSettings;
    /**
     * See:
     * https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getConstraints
     * @ignore
     * */
    getConstraints(): MediaTrackConstraints;
    /**
     * Set the camera capabilities.
     * Only available when the camera is open.
     * It's a low-level API, usually you can use the wrapped APIs instead.
     * More information:
     * https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/applyConstraints
     * ```js
     * await enhancer.applyConstraints({ frameRate: { ideal:5 } });
     * ```
     * @ignore
     */
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    /**
     * Turn on the torch/flashlight. Only available in Chrome and Edge.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.turnOnTorch();
     * ```
     * @see [[turnOffTorch]],[[getCapabilities]]
     * @category Camera Settings
     */
    turnOnTorch(): Promise<void>;
    /**
     * Turn off the torch. Only available in Chrome and Edge.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.turnOffTorch();
     * ```
     * @see [[turnOnTorch]],[[getCapabilities]]
     * @category Camera Settings
     */
    turnOffTorch(): Promise<void>;
    /**
     * Adjusts the color temperature. Only available in Chrome and Edge.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.setColorTemperature(5000);
     * ```
     * @see [[getCapabilities]]
     * @category Camera Settings
     */
    setColorTemperature(value: number): Promise<void>;
    getColorTemperature(): number;
    /**
     * Adjusts the exposure level. Only available in Chrome and Edge.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.setExposureCompensation(-0.7);
     * ```
     * @see [[getCapabilities]]
     * @category Camera Settings
     */
    setExposureCompensation(value: number): Promise<void>;
    getExposureCompensation(): number;
    private _setHardwareScale;
    private _getHardwareScale;
    private _setSoftwareScale;
    private _getSoftwareScale;
    private _setScaleCenter;
    private _resetScaleCenter;
    private _isVideoCenter;
    /**
     *
     * @param value
     * @deprecated
     */
    private _setZoom;
    /**
     * Adjusts the zoom ratio.
     * Only available when the camera is open.
     * ```js
     * await enhancer.setZoom({factor: 2});
     * ```
     * @see [[getCapabilities]]
     * @category Camera Settings
     */
    setZoom(settings: number | {
        factor: number;
        centerPoint?: {
            x: string;
            y: string;
        };
    }): Promise<void>;
    /**
     * @returns
     * @deprecated
     */
    getZoom(): number;
    getZoomSettings(): {
        factor: number;
    };
    resetZoom(): Promise<void>;
    /**
     * Adjusts the frame rate. Only available in Chrome, Edge and Safari.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.setFrameRate(10);
     * ```
     * @see [[getFrameRate]],[[getCapabilities]]
     * @category Camera Settings
     */
    setFrameRate(value: number): Promise<void>;
    /**
     * Get the real-time frame rate.
     * Only available when the camera is open.
     * ```js
     * enhancer.getFrameRate();
     * ```
     * @see [[setFrameRate]],[[getCapabilities]]
     * @category Camera Settings
     */
    getFrameRate(): number;
    private _setFocus;
    /**
     * Adjusts the focus distance. Only available in Chrome and Edge.
     * Only available when the camera is open.
     * Will reject if not support.
     * ```js
     * await enhancer.setFocus(5);
     * ```
     * @see [[getFocus]],[[getCapabilities]]
     * @category Camera Settings
     */
    setFocus(settings: string | {
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
    }, distance?: number): Promise<void>;
    /**
     * Get the focus distance.
     * Only available when the camera is open.
     * ```js
     * enhancer.getFocus();
     * ```
     * @see [[setFocus]],[[getCapabilities]]
     * @category Camera Settings
     * @deprecated
     */
    getFocus(): Object;
    getFocusSettings(): Object;
    private _setFocusAndGetContract;
    private _doFocusDetail;
    private _setLocalFocus;
    enableTapToFocus(): Promise<void>;
    disableTapToFocus(): void;
    isTapToFocusEnabled(): boolean;
    /**
     * Might be called when:
     * 1. container resizes;
     * 2. 'setVideoFit()' is called;
     * 3. '_scaleVideo()' is called;
     * 4. resolution changed;
     * @ignore
     */
    private _updateVideoContainerStyle;
    private _scaleVideo;
    /**
     *
     * @param width width of the canvas
     * @param height height of the canvas
     * @param region the region to be cropped
     * @param canvasSizeLimit If set, the cropped region may be resized when its size is bigger than set value.
     * @returns {sx:number, sy:number, sWidth:number, sHeight:number, dWidth:number, dHeight:number}
     * sx: the horizontal distance between the left top corner of of the cropped region and the whole canvas.
     * sy: the vertical distance between the left top corner of the cropped region and the whole canvas.
     * sWidth: width of the cropped region.
     * sHeight: height of the cropped region.
     * dWidth: width of the cropped region. May be different from 'sWidth' when 'canvasSizeLimit' is set.
     * dHeight: height of the cropped region. May be different from 'sHeight' when 'canvasSizeLimit' is set.
     */
    getFrameSize(width: number, height: number, region?: Region, canvasSizeLimit?: number): {
        sx: number;
        sy: number;
        sWidth: number;
        sHeight: number;
        dWidth: number;
        dHeight: number;
    };
    /**
     * Get a frame of the specific region of the video arccording to the scanRegion.
     * @see [[setScanRegion]],[[getScanRegion]]
     */
    getFrame(): DCEFrame;
    getImage(): DSImage;
    private _drawImage;
    private _readCvsData;
    private _transformPixelFormat;
    private _getImageData;
    /**
     * Force lose webgl context.
     * @private
     */
    private forceLoseContext;
    _getVideoData(bufferContainer?: Uint8Array, options?: {
        region?: Region;
        pixelFormat?: PixelFormat;
        scale?: number;
        scaleCenter?: {
            x: string;
            y: string;
        };
    }): DCEFrame;
    /**
     * @private
     */
    private getCurrentRegion;
    private _fetchingLoop;
    /**
     * Starts a fetching loop that continuously put frames in a buffer.
     * @see [[stopFetchingLoop]],[[isFetchingLoopStarted]],[[setScanRegion]],[[getScanRegion]],[[croppingRegions]],[[loopInterval]]
     */
    startFetchingLoop(): void;
    /**
     * If the frame fetching loop is started.
     * @see [[startFetchingLoop]],[[stopFetchingLoop]]
     */
    isFetchingLoopStarted(): boolean;
    /**
     * Stop fetching loop and clear frames buffer.
     * @see [[startFetchingLoop]],[[isFetchingLoopStarted]]
     */
    stopFetchingLoop(): void;
    /**
     * Get a DCEFrame object which contains the image data from frames buffer.
     * @see [[maxNumberOfFramesInBuffer]],[[numberOfFramesInBuffer]]
     */
    getFrameFromBuffer(index?: number): DCEFrame;
    clearFrameBuffer(): void;
    private _createDrawingLayerBaseCvs;
    /**
     * Might be called when:
     * 1. '_clickIptSingleFrameMode' is triggered;
     * 2. 'bOpen' is set to 'true';
     * 3. container resizes;
     * 4. resolution is changed;
     * 5. 'setOriginalImage()', 'showOriginalImage()' or '_hideOriginalImage()' is called;
     * @ignore
     */
    private _updateDrawingLayersSize;
    _createDrawingLayer(drawingLayerId?: number): import("./drawinglayer").default;
    deleteDrawingLayer(drawingLayerId: number): void;
    createDrawingLayer(): import("./drawinglayer").default;
    getDrawingLayer(drawingLayerId: number): import("./drawinglayer").default;
    getDrawingLayers(): import("./drawinglayer").default[];
    getSelectedDrawingItems(): any[];
    createDrawingStyle(styleDefinition: any): number;
    getDrawingStyle(styleId: number): import("..").DrawingStyle;
    getDrawingStyles(): import("..").DrawingStyle[];
    updateDrawingStyle(styleId: number, styleDefinition: any): void;
    clearDrawingLayers(): void;
    showTip(x: number, y: number, width: number, initialMessage?: string, duration?: number, autoShowSuggestedTip?: boolean): void;
    private _hideTip;
    hideTip(): void;
    updateTipMessage(message: string): void;
    suggestTip(occasion: string, message: string): void;
    private _controler;
    _createControler(): Controler;
    _destroyControler(): void;
    setOriginalImage(imageData: Uint8Array | Uint8ClampedArray | HTMLCanvasElement, width: number, height: number): void;
    getOriginalImage(): Uint8Array;
    deleteOriginalImage(): Promise<void>;
    private _showOriginalImageCvs;
    private _hideOriginalImageCvs;
    showOriginalImage(): void;
    private _hideOriginalImage;
    hideOriginalImage(): Promise<void>;
    /**
     * Releases all resources used by the 'CameraEnhancer' instance.
     * @param removeUIElement When true, remove the UIElement from DOM.
     */
    dispose(removeUIElement: boolean): void;
}
export {};
//# sourceMappingURL=cameraenhancer.d.ts.map