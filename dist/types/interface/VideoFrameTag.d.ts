import { ImageTag, DSRect } from "dynamsoft-core";
export interface VideoFrameTag extends ImageTag {
    isCropped: boolean;
    cropRegion: DSRect;
    originalWidth: number;
    originalHeight: number;
    currentWidth: number;
    currentHeight: number;
    timeSpent: number;
    timeStamp: number;
}
