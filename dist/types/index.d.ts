import CameraEnhancer from "./class/cameraenhancer";
import { DT_Arc, DT_Polygon, DT_Rect, DT_Image, DT_Text, DT_Line, DT_Group } from "./class/drawingItem";
import { PlayCallbackInfo } from "./interface/playcallbackinfo";
import { Region } from "./interface/region";
import { DCEFrame } from "./interface/DCEFrame";
import { Area } from "./interface/Area";
import { Point } from "./interface/point";
import { DrawingStyle } from "./interface/drawingstyle";
import { Warning } from "./interface/warning";
import { DrawingItemEvent } from "./interface/DrawingItemEvent";
declare const DrawingItem: {
    DT_Arc: typeof DT_Arc;
    DT_Polygon: typeof DT_Polygon;
    DT_Rect: typeof DT_Rect;
    DT_Image: typeof DT_Image;
    DT_Text: typeof DT_Text;
    DT_Line: typeof DT_Line;
    DT_Group: typeof DT_Group;
};
export { CameraEnhancer, DrawingItem, PlayCallbackInfo, Region, DCEFrame, Area, Point, DrawingStyle, Warning, DrawingItemEvent };
//# sourceMappingURL=index.d.ts.map