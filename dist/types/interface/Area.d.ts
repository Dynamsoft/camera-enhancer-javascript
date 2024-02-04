export interface Area {
    /**
     * The x coordinate of the top-left point of the of the decorator.
     * In percentage (0~100) of the width of the viewer
     */
    x: number;
    /**
     * The y coordinate of the top-left point of the of the decorator.
     * In percentage (0~100) of the height of the viewer
     */
    y: number;
    /**
     * Size of the decorator in percentage (0~100) of the width of the viewer
     */
    width: number;
    /**
     * Size of the decorator in percentage (0~100) of the height of the viewer
     */
    height: number;
}
