import { DSImageData } from "@dynamsoft/dynamsoft-core";
import { VideoFrameTag } from "./VideoFrameTag";
export interface DCEFrame extends DSImageData {
    toCanvas: () => HTMLCanvasElement;
    isDCEFrame: boolean;
    tag?: VideoFrameTag;
}
//# sourceMappingURL=DCEFrame.d.ts.map