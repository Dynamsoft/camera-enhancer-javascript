import { DSImageData, Rect } from "@dynamsoft/dynamsoft-core";
import { DrawingItem } from "./drawingitem";
export declare class DT_Image extends DrawingItem {
    #private;
    private image;
    set maintainAspectRatio(value: boolean);
    get maintainAspectRatio(): boolean;
    constructor(image: DSImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, rect: Rect, maintainAspectRatio: boolean, drawingStyleId?: number);
    protected extendSet(property: string, value: any): boolean;
    protected extendGet(property: string): any;
    protected updateCoordinateBaseFromImageToView(): void;
    protected updateCoordinateBaseFromViewToImage(): void;
    setPosition(position: any): void;
    getPosition(): any;
    updatePosition(): void;
    setImage(image: DSImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): void;
    getImage(): DSImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    setImageRect(rect: Rect): void;
    getImageRect(): Rect;
}
//# sourceMappingURL=image.d.ts.map