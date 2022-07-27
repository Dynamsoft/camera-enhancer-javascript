import { Region } from './region';
export interface DCEFrame {
    data: Uint8Array;
    region: Region;
    sx: number;
    sy: number;
    width: number;
    height: number;
    colorMode: string;
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
//# sourceMappingURL=DCEFrame.d.ts.map