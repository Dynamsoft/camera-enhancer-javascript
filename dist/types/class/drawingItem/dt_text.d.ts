import { DrawingItem } from "./drawingitem";
export declare class DT_Text extends DrawingItem {
    private _text;
    constructor(text: string, x: number, y: number, width: number, styleId?: number);
    protected _extendSet(property: string, value: any): boolean;
    protected _extendGet(property: string): any;
}
//# sourceMappingURL=dt_text.d.ts.map