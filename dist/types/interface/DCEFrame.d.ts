import { DSImageData } from "dynamsoft-core";
import { VideoFrameTag } from "./VideoFrameTag";
export interface DCEFrame extends DSImageData {
    toCanvas: () => HTMLCanvasElement;
    isDCEFrame: boolean;
    tag?: VideoFrameTag;
}
