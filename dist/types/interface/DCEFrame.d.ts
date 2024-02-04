import { Region } from './region';
import { DSImage } from './dsimage';
export interface DCEFrame extends DSImage {
    data: Uint8Array;
    region: Region;
    sx: number;
    sy: number;
    width: number;
    height: number;
    stride?: number;
    /**
     * @deprecated
     */
    colorMode: string;
    pixelFormat: string;
    timeSpent: number;
    timeStamp: number;
    isCropped: boolean;
    toCanvas: () => HTMLCanvasElement;
    _sWidth: number;
    _sHeight: number;
    /**
     * @ignore
     */
    _bUseWebGL: boolean;
}
