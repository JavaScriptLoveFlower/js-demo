declare function parseNumber(num: number): any;
declare function _timeFormat<T>(data: T): number | T;
declare type timeSpanInter = (timeSpan?: number) => number;
declare let timeSpanPositioning: timeSpanInter;
declare function convertTimestamps(time: string): number;
export { parseNumber, _timeFormat, timeSpanPositioning, convertTimestamps };
