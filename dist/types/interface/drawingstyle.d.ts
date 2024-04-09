export interface DrawingStyle {
    id?: number;
    lineWidth?: number;
    fillStyle?: string;
    strokeStyle?: string;
    paintMode?: "fill" | "stroke" | "strokeAndFill";
    fontFamily?: string;
    fontSize?: number;
}
