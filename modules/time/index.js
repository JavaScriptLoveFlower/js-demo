"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeTools_1 = require("../../tools/timeTools");
var Error_1 = require("../../utils/Error");
var Time = /** @class */ (function () {
    function Time() {
        var _this = this;
        /*
        * 计算星座
        * @params date : number 时间戳
        * */
        this.getHoroscope = function (date) {
            var constellation = ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯'];
            var timeTransformation = new Date(date);
            var month = timeTransformation.getMonth() + 1;
            var day = timeTransformation.getDate();
            // @ts-ignore
            var startMonth = month - (day - 14 < '865778999988'.charAt(month));
            return constellation[startMonth] + '座';
        };
        /*
        * 时间差
        * @params options obj 配置对象
        * */
        this.timeDifference = function (options) {
            var isTimestamp = options.isTimestamp, startTime = options.startTime, type = options.type, endTime = options.endTime;
            var dateBegin = startTime;
            var dateEnd = endTime || new Date().getTime();
            if (!isTimestamp) {
                if (typeof startTime !== 'string' || typeof endTime !== 'string') {
                    Error_1.ErrorMsg("isTimestamp and configuration type are incorrect");
                }
                dateBegin = timeTools_1.convertTimestamps(startTime);
                if (endTime) {
                    dateEnd = isTimestamp ? endTime : timeTools_1.convertTimestamps(endTime);
                }
            }
            else {
                if (typeof startTime !== 'number' || typeof endTime !== 'number') {
                    Error_1.ErrorMsg("isTimestamp and configuration type are incorrect");
                }
            }
            var dateDiff = Math.abs(dateEnd - dateBegin);
            var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
            var leave1 = dateDiff % (24 * 3600 * 1000);
            var hours = Math.floor(leave1 / (3600 * 1000));
            var leave2 = leave1 % (3600 * 1000);
            var minutes = Math.floor(leave2 / (60 * 1000));
            var leave3 = leave2 % (60 * 1000);
            var seconds = Math.round(leave3 / 1000);
            switch (type) {
                case 'day':
                    return dayDiff + "天";
                case 'hours':
                    return hours + "小时";
                case 'minutes':
                    return minutes + '分';
                case 'seconds':
                    return seconds + '秒';
                case 'HoursMinutes':
                    return hours + "小时 " + minutes + '分';
                case 'HoursMinutesSeconds':
                    return hours + "小时 " + minutes + '分 ' + seconds + '秒 ';
                case 'timeHours':
                    return dayDiff + "天 " + hours + "小时";
                case 'timeHoursMinutes':
                    return dayDiff + "天 " + hours + "小时 " + minutes + '分';
                default:
                    return dayDiff + "天 " + hours + "小时 " + minutes + '分 ' + seconds + '秒 ';
            }
        };
        /* 获取当前时间并格式化 */
        this.getTime = function (data) {
            data = timeTools_1._timeFormat(data);
            var now = (new Date()).getTime();
            var cha = (now - data) / 1000;
            if (cha < 43200) {
                // 当天
                return _this.dateFormat({ time: data, formatStr: "{A} {t}:{ii}" });
            }
            else if (cha < 518400) {
                // 隔天 显示日期+时间
                return _this.dateFormat({ time: data, formatStr: "{Mon}月{DD}日 {A} {t}:{ii}" });
            }
            else {
                // 隔年 显示完整日期+时间
                return _this.dateFormat({ time: data, formatStr: "{Y}-{MM}-{DD} {A} {t}:{ii}" });
            }
        };
        /*
        * 格式化时间
        * @params: options 格式化配置对象
        * 可以自定义格式： 如：{Y}-{MM}-{DD} {A} {t}:{ii}
        * {
        *  Y：年，
        *  M: 不补0的月,
        *  MM：补0的月
        *  Mon：大写月
        *  D: 日 如上
        *  DD：日 如上
        *  h：小时 如上
        *  hh：小时如上
        *  A：显示上午下午
        *  i：分钟
        *  ii: 分钟
        *  s：秒钟
        *  ss: 秒钟
        * }
        * */
        this.dateFormat = function (options) {
            var time = options.time, formatStr = options.formatStr;
            var date = new Date(time);
            var dateObj = {}, rStr = /\{([^}]+)\}/, mons = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
            // @ts-ignore
            dateObj["Y"] = date.getFullYear();
            // @ts-ignore
            dateObj["M"] = date.getMonth() + 1;
            // @ts-ignore
            dateObj["MM"] = timeTools_1.parseNumber(dateObj["M"]);
            // @ts-ignore
            dateObj["Mon"] = mons[dateObj['M'] - 1];
            // @ts-ignore
            dateObj["D"] = date.getDate();
            // @ts-ignore
            dateObj["DD"] = timeTools_1.parseNumber(dateObj["D"]);
            // @ts-ignore
            dateObj["h"] = date.getHours();
            // @ts-ignore
            dateObj["hh"] = timeTools_1.parseNumber(dateObj["h"]);
            // @ts-ignore
            dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
            // @ts-ignore
            dateObj["tt"] = timeTools_1.parseNumber(dateObj["t"]);
            // @ts-ignore
            dateObj["A"] = dateObj["h"] > 12 ? '下午' : '上午';
            // @ts-ignore
            dateObj["i"] = date.getMinutes();
            // @ts-ignore
            dateObj["ii"] = timeTools_1.parseNumber(dateObj["i"]);
            // @ts-ignore
            dateObj["s"] = date.getSeconds();
            // @ts-ignore
            dateObj["ss"] = timeTools_1.parseNumber(dateObj["s"]);
            while (rStr.test(formatStr)) {
                // @ts-ignore
                formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
            }
            return formatStr;
        };
        /* 获取本月的最后一天 */
        this.getLastDayOfMonth = function () {
            var date = new Date();
            var month = date.getMonth();
            date.setMonth(month + 1);
            date.setDate(0);
            return date.getDate(); // 返回最后一天
        };
        /* 获取这个季度的第一天 */
        this.getFirstDayOfSeason = function (formatStr) {
            if (formatStr === void 0) { formatStr = '{Y}-{MM}-{DD}'; }
            var date = new Date();
            var month = date.getMonth();
            if (month < 3) {
                date.setMonth(0);
            }
            else if (2 < month && month < 6) {
                date.setMonth(3);
            }
            else if (5 < month && month < 9) {
                date.setMonth(6);
            }
            else if (8 < month && month < 11) {
                date.setMonth(9);
            }
            date.setDate(1);
            return _this.dateFormat({
                time: date.getTime(),
                formatStr: formatStr
            });
        };
        /* 获取当天是周几 */
        this.getWeek = function () {
            var weekStr = '日一二三四五六';
            return weekStr.charAt(new Date().getDay());
        };
        /* 获取今天是当年的第几天 */
        this.getYearDay = function () { return timeTools_1.timeSpanPositioning(1); };
        /* 获取今天是当年的第几周 */
        this.getYearWeek = function () { return timeTools_1.timeSpanPositioning(7); };
        /* 获取今年还剩下多少时间 */
        this.lastDay = function () {
            var data = new Date();
            var nextYear = (data.getFullYear() + 1).toString();
            // @ts-ignore
            var lastDay = new Date(new Date(nextYear) - 1).getTime(); // 获取本年的最后一毫秒：
            // @ts-ignore
            var diff = lastDay - data; // 毫秒数
            return Math.floor(diff / (1000 * 60 * 60 * 24));
        };
        /* 获取N天后的日期 */
        this.getDate = function (time, count) {
            time.setDate(time.getDate() + count); //获取N天后的日期
            var date = new Date(+time + 8 * 3600 * 1000);
            return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '-');
        };
        /*
        *  计算当周开始和结束时间
        * @params formatStr string 时间格式
        * */
        this.getWeekCycle = function (formatStr) {
            if (formatStr === void 0) { formatStr = '{Y}-{MM}-{DD}'; }
            var data = new Date();
            var weekday = data.getDay();
            weekday = weekday === 0 ? 7 : weekday;
            var firstDay = _this.dateFormat({
                time: timeTools_1.convertTimestamps(_this.getDate(data, -weekday)),
                formatStr: formatStr
            });
            var lastDay = _this.dateFormat({
                time: timeTools_1.convertTimestamps(_this.getDate(data, 7 - 1)),
                formatStr: formatStr
            });
            return {
                firstDay: firstDay,
                lastDay: lastDay
            };
        };
        /*
        * 判断某段时间是否在
        * @params beginTime number | string 起始时间
        * @params lastTime number | string 结束时间
        * @param time number | string 判断的时间段
        * */
        this.isExist = function (options) {
            var beginTime = options.beginTime, lastTime = options.lastTime, time = options.time;
            if (!lastTime)
                Error_1.ErrorMsg("property lastTime cannot be empty");
            beginTime = beginTime || new Date().getTime();
            if (typeof lastTime === 'string' && typeof time === 'string') { // 正规时间格式
                lastTime = timeTools_1.convertTimestamps(lastTime);
                time = timeTools_1.convertTimestamps(time);
            }
            if (beginTime > lastTime)
                Error_1.ErrorMsg('The end time can no longer be before the current time');
            if (typeof lastTime !== 'number' && typeof beginTime !== 'number' && typeof time !== 'number')
                Error_1.ErrorMsg('error in type');
            return beginTime < time && time < lastTime;
        };
        /*
        * 判断某段时间是否在
        * @params beginTime number | string 起始时间
        * @params lastTime number | string 结束时间
        * @param time number | string 判断的时间段
        * */
    }
    /* 计算相差X秒内的信息不会显示时间 */
    Time.prototype.getChatTime = function (options) {
        var oTime = options.oTime, nTime = options.nTime, differ = options.differ;
        // @ts-ignore
        oTime = timeTools_1._timeFormat(oTime);
        // @ts-ignore
        nTime = timeTools_1._timeFormat(nTime);
        if ((nTime - oTime / 1000) > differ) {
            return this.getTime(nTime);
        }
    };
    return Time;
}());
exports.default = Time;
