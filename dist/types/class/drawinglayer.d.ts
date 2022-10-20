import { fabric } from "dm-fabric";
import { DrawingItem } from "./drawingItem";
import { DrawingStyle } from "../interface/drawingstyle";
export default class DrawingLayer {
    fabricCanvas: fabric.Canvas;
    private id;
    private _mapDrawingStyles;
    mapMediaType_Style: Map<any, any>;
    private mode;
    onSelectionChange: (selectedDrawingItems: Array<DrawingItem>, deselectedDrawingItems: Array<DrawingItem>) => void;
    private _arrDrwaingItem;
    private _arrFabricObject;
    private _visible;
    _manager: any;
    constructor(canvas: HTMLCanvasElement, id: number, mapDrawingStyles: Map<number, DrawingStyle>, options?: Object);
    getId(): number;
    private _getDrawingStyle;
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
     */
    addDrawingItem(drawingItem: DrawingItem): void;
    addDrawingItems(drawingItems: Array<DrawingItem>): void;
    removeDrawingItem(drawingItem: DrawingItem): void;
    removeDrawingItems(drawingItems: Array<DrawingItem>): void;
    setDrawingItems(drawingItems: Array<DrawingItem>): void;
    getDrawingItems(filter?: ((item: DrawingItem) => boolean)): Array<DrawingItem>;
    getSelectedDrawingItems(): Array<DrawingItem>;
    hasDrawingItem(drawingItem: DrawingItem): boolean;
    clearDrawingItems(): void;
    setDrawingStyle(drawingStyleId: number, mediaType?: string, styleSelector?: string): void;
    setMode(newMode: string): void;
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