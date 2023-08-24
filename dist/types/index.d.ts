import { CameraEnhancerModule } from "./class/CameraEnhancerModule";
import { CameraView } from "./class/CameraView";
import { ImageEditorView } from "./class/ImageEditorView";
import { CameraEnhancer } from "./class/CameraEnhancer";
import { DT_Rect, DT_Image, DT_Text, DT_Line, DT_Quad } from "./class/drawingItem";
import { Feedback } from "./class/Feedback";
import { DrawingStyleManager } from "./class/DrawingStyleManager";
export { EnumDrawingItemMediaType, EnumDrawingItemState, EnumEnhancedFeatures, } from "./enum";
export * from "./interface";
declare const DrawingItem: {
    RectDrawingItem: typeof DT_Rect;
    ImageDrawingItem: typeof DT_Image;
    TextDrawingItem: typeof DT_Text;
    LineDrawingItem: typeof DT_Line;
    QuadDrawingItem: typeof DT_Quad;
};
export { CameraEnhancerModule, CameraView, ImageEditorView, DrawingStyleManager, CameraEnhancer, Feedback, DrawingItem, };
//# sourceMappingURL=index.d.ts.map