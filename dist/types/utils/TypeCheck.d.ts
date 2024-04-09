import { DCEFrame, DrawingStyle, Note, Resolution, TipConfig, VideoFrameTag } from "../interface";
/**
 * Judge if the input is an object(exclude array and function). If `null` or `undefined`, return `false`.
 * @param value
 * @returns
 */
export declare const isObject: (value: any) => value is Object;
/**
 * Judge if the input is an non-empty string.
 * @param value
 * @returns
 */
export declare const isNonEmptyString: (value: any) => value is string;
/**
 * Judge is the input is a {@link Arc} object.
 * @param value
 * @returns
 */
export declare const isArc: (value: any) => value is import("dynamsoft-core").Arc;
/**
 * Judge is the input is a {@link DSImageData} object.
 * @param value
 * @returns
 */
export declare const isDSImageData: (value: any) => value is import("dynamsoft-core").DSImageData;
/**
 * Judge is the input is a {@link DSRect} object.
 * @param value
 * @returns
 */
export declare const isDSRect: (value: any) => value is import("dynamsoft-core").DSRect;
/**
 * Judge is the input is a {@link ImageTag} object.
 * @param value
 * @returns
 */
export declare const isImageTag: (value: any) => value is import("dynamsoft-core").ImageTag;
/**
 * Judge is the input is a {@link LineSegment} object.
 * @param value
 * @returns
 */
export declare const isLineSegment: (value: any) => value is import("dynamsoft-core").LineSegment;
/**
 * Judge is the input is a {@link Polygon} object.
 * @param value
 * @returns
 */
export declare const isPolygon: (value: any) => value is import("dynamsoft-core").Polygon;
/**
 * Judge is the input is a {@link Point} object.
 * @param value
 * @returns
 */
export declare const isPoint: (value: any) => value is import("dynamsoft-core").Point;
/**
 * Judge is the input is a {@link Quadrilateral} object.
 * @param value
 * @returns
 */
export declare const isQuad: (value: any) => value is import("dynamsoft-core").Quadrilateral;
/**
 * Judge is the input is a {@link Rect} object.
 * @param value
 * @returns
 */
export declare const isRect: (value: any) => value is import("dynamsoft-core").Rect;
/**
 * Judge is the input is a {@link DCEFrame} object.
 * @param value
 * @returns
 */
export declare const isDCEFrame: (value: any) => value is DCEFrame;
/**
 * Judge is the input is a {@link DrawingStyle} object.
 * @param value
 * @returns
 */
export declare const isDrawingStyle: (value: any) => value is DrawingStyle;
/**
 * Judge is the input is a {@link Note} object.
 * @param value
 * @returns
 */
export declare const isNote: (value: any) => value is Note;
/**
 * Judge is the input is a {@link Resolution} object.
 * @param value
 * @returns
 */
export declare const isResolution: (value: any) => value is Resolution;
/**
 * Judge is the input is a {@link TipConfig} object.
 * @param value
 * @returns
 */
export declare const isTipConfig: (value: any) => value is TipConfig;
/**
 * Judge is the input is a {@link VideoFrameTag} object.
 * @param value
 * @returns
 */
export declare const isVideoFrameTag: (value: any) => value is VideoFrameTag;
