import { DrawingItem } from "./drawingitem";
export declare class DT_Group extends DrawingItem {
    constructor(childItems: Array<DrawingItem>);
    getChildItems(): Array<DrawingItem>;
    addChildItem(item: DrawingItem): void;
    removeChildItem(item: DrawingItem): void;
}
//# sourceMappingURL=dt_group.d.ts.map