import { DrawingItem } from "../class/DrawingItem";
export interface DrawingItemEvent extends Event {
    targetItem: DrawingItem;
    itemClientX: number;
    itemClientY: number;
    itemPageX: number;
    itemPageY: number;
}
