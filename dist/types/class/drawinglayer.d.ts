import { fabric } from "dm-fabric";
import { DrawingItem } from "./drawingItem";
import { EnumDrawingItemState, EnumDrawingItemMediaType } from "../enum";
export default class DrawingLayer {
    static DDN_LAYER_ID: number;
    static DBR_LAYER_ID: number;
    static DLR_LAYER_ID: number;
    static USER_DEFINED_LAYER_BASE_ID: number;
    fabricCanvas: fabric.Canvas;
    private id;
    get width(): number;
    get height(): number;
    mapMediaType_Style: Map<string, any>;
    mapType_StateAndStyleId: Map<string, any>;
    private mode;
    onSelectionChanged: (selectedDrawingItems: Array<DrawingItem>, deselectedDrawingItems: Array<DrawingItem>) => void;
    private _arrDrwaingItem;
    private _arrFabricObject;
    private _visible;
    _manager: any;
    /**
     * @ignore
     */
    set _allowMultiSelect(value: boolean);
    get _allowMultiSelect(): boolean;
    constructor(canvas: HTMLCanvasElement, id: number, options?: Object);
    getId(): number;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    private _getItemCurrentStyleId;
    private _getItemCurrentStyle;
    /**
     * Change style of drawingItems of specific media type in specific style selector.
     * DrawingItems that have 'styleId' won't be changed.
     * @param mediaType the mediaType of drawingItems that attend to change
     * @param styleSelector
     * @param drawingStyle
     * @private
     */
    private _changeMediaTypeCurStyleInStyleSelector;
    /**
     * Change the style of specific drawingItem.
     * DrawingItem that has 'styleId' won't be changed.
     * @param drawingItem
     * @param drawingStyle
     * @private
     */
    private _changeItemStyle;
    _updateGroupItem(targetGroup: DrawingItem, item: DrawingItem, addOrRemove: string): void;
    private _addDrawingItem;
    /**
     * Add a drawing item to the drawing layer.
     * Drawing items in drawing layer with higher id are always above those in drawing layer with lower id.
     * In a same drawing layer, the later added is above the previous added.
     * @param drawingItem
     * @ignore
     */
    addDrawingItem(drawingItem: DrawingItem): void;
    addDrawingItems(drawingItems: Array<DrawingItem>): void;
    /**
     *
     * @param drawingItem
     * @returns
     * @ignore
     */
    removeDrawingItem(drawingItem: DrawingItem): void;
    removeDrawingItems(drawingItems: Array<DrawingItem>): void;
    setDrawingItems(drawingItems: Array<DrawingItem>): void;
    getDrawingItems(filter?: (item: DrawingItem) => boolean): Array<DrawingItem>;
    getSelectedDrawingItems(): Array<DrawingItem>;
    hasDrawingItem(drawingItem: DrawingItem): boolean;
    clearDrawingItems(): void;
    _setDefaultStyle(drawingStyleId: number, mediaTypes?: Array<string>, styleSelectors?: Array<string>): void;
    setDefaultStyle(drawingStyleId: number, state?: EnumDrawingItemState, mediaType?: EnumDrawingItemMediaType): void;
    /**
     *
     * @param newMode
     * @ignore
     */
    setMode(newMode: string): void;
    /**
     *
     * @returns
     * @ignore
     */
    getMode(): string;
    _setDimensions(dimensions: {
        width: number | string;
        height: number | string;
    }, options?: {
        backstoreOnly?: boolean;
        cssOnly?: boolean;
    }): void;
    _setObjectFit(value: string): void;
    _getObjectFit(): string;
    renderAll(): void;
    dispose(): void;
}
//# sourceMappingURL=drawinglayer.d.ts.map