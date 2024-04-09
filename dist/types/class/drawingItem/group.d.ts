import { DrawingItem } from "./DrawingItem";
export declare class DT_Group extends DrawingItem {
    constructor(childItems: Array<DrawingItem>);
    protected extendSet(property: string, value: any): boolean;
    protected extendGet(property: string): void;
    protected updateCoordinateBaseFromImageToView(): void;
    protected updateCoordinateBaseFromViewToImage(): void;
    setPosition(): void;
    getPosition(): any;
    updatePosition(): void;
    getChildDrawingItems(): Array<DrawingItem>;
    setChildDrawingItems(item: DrawingItem): void;
    removeChildItem(item: DrawingItem): void;
}
