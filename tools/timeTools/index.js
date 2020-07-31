"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  * 给双位数补0
  * @params num: 转换的值
  * */
function parseNumber(num) {
    return num < 10 ? "0" + num : num;
}
exports.parseNumber = parseNumber;
/*
* 判断时间戳长度
* @params data: 时间戳
* */
function _timeFormat(data) {
    // @ts-ignore
    return data.toString().length < 13 ? data * 1000 : data;
}
exports._timeFormat = _timeFormat;
var timeSpanPositioning = function (timeSpan) {
    if (timeSpan === void 0) { timeSpan = 1; }
    // @ts-ignore
    return Math.ceil((new Date() - new Date(new Date().getFullYear().toString())) / (24 * 60 * 60 * 1000) / timeSpan);
};
exports.timeSpanPositioning = timeSpanPositioning;
function convertTimestamps(time) {
    return new Date(time.replace(/-/g, "/")).getTime();
}
exports.convertTimestamps = convertTimestamps;
