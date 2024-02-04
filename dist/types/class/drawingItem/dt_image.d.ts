import { DrawingItem } from "./drawingitem";
export declare class DT_Image extends DrawingItem {
    private image;
    constructor(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, x: number, y: number, styleId?: number);
    protected _extendSet(property: string, value: any): boolean;
    protected _extendGet(property: string): any;
}
