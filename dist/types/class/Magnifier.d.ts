export declare class Magnifier {
    #private;
    get magnifierCanvas(): HTMLCanvasElement;
    constructor();
    update(magnifierSize: number, centerPoint: {
        x: number;
        y: number;
    }, magnifiedRegionSize: number, magnifiedImages: Array<{
        image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap;
        width: number;
        height: number;
    }>): void;
    show(): void;
    hide(): void;
}
