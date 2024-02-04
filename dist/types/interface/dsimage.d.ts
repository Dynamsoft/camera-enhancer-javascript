export interface DSImage {
    data: Uint8Array;
    width: number;
    height: number;
    stride?: number;
    pixelFormat: string;
}
