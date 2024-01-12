import { DSRect, Rect } from "dynamsoft-core";
export declare class ScanRegionConverter {
    /**
     *
     * @param region
     * @param sourceWidth
     * @param sourceHeight
     * @returns rounded
     */
    static convert(region: DSRect | Rect, sourceWidth: number, sourceHeight: number): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
//# sourceMappingURL=ScanRegionConverter.d.ts.map