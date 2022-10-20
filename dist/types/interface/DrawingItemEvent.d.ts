import { DrawingItem } from "../class/drawingItem";
export interface DrawingItemEvent extends Event {
    targetItem: DrawingItem;
    itemClientX: number;
    itemClientY: number;
    itemPageX: number;
    itemPageY: number;
}
//# sourceMappingURL=DrawingItemEvent.d.ts.map