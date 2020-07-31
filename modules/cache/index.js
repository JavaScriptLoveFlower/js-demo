"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cache = /** @class */ (function () {
    function Cache() {
        var _this = this;
        /*
        * 存入storage缓存
        * @param key number | string 键值
        * @param value any 值
        * @param distance number 时间搓
        *
        * */
        this.setLocalStorage = function (key, value, distance) {
            var obj = {
                distance: distance,
                value: value,
                now: new Date().getTime()
            };
            // @ts-ignore
            localStorage.setItem(key, JSON.stringify(obj));
        };
        /*
        * 取出storage缓存
        * @param key number | string 键值
        * */
        this.getLocalStorage = function (key) {
            var obj = JSON.parse(localStorage.getItem(key));
            var now = new Date().getTime();
            if (!obj)
                throw new Error("No value with " + key + " as key value");
            if (obj.now && now - obj.now > obj.distance) {
                return _this.removeLocalStorage(key);
            }
            return obj;
        };
        /*
         * 删除storage缓存
         * @param key number | string 键值
         * */
        this.removeLocalStorage = function (key) {
            localStorage.removeItem(key);
        };
    }
    return Cache;
}());
exports.default = Cache;
