export declare class InnerComponent extends HTMLElement {
    #private;
    constructor();
    getWrapper(): HTMLDivElement;
    setElement(slot: "content" | "single-frame-input-container" | "drawing-layer", el: HTMLElement): void;
    getElement(slot: "content" | "single-frame-input-container" | "drawing-layer"): HTMLElement;
    removeElement(slot: "content" | "single-frame-input-container" | "drawing-layer"): void;
}
