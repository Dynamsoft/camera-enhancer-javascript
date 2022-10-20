export declare class Matrix3 {
    /**
     * @param left
     * @param right
     */
    static multiply(left: Array<number>, right: Array<number>): number[];
    static identity(): number[];
    static translate(matrix: Array<number>, tx: number, ty: number): number[];
    static rotate(matrix: Array<number>, angleInRadians: number): number[];
    static scale(matrix: Array<number>, sx: number, sy: number): number[];
}
//# sourceMappingURL=Matrix3.d.ts.map