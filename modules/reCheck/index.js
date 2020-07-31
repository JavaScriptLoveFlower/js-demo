"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reCheck = /** @class */ (function () {
    function reCheck() {
        /*---------------------------------------------其他校验-------------------------------------------------------*/
        /* 检测电话号码是否正确 */
        this.checkPhone = function (val) { return /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(val); };
        /* 检测是否是邮箱 */
        this.checkEmail = function (val) { return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(val); };
        /* 检测url是否合法 */
        this.checkUrl = function (val) { return /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(val); };
        /* 国内电话号码 */
        this.checkDomesticTelephone = function (val) { return /^\d{15}|\d{18}$/.test(val); };
        /* 必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间 */
        this.checkNotSpecial = function (options) { return new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{' + options.start + ',' + options.end + '}$').test(options.val); };
        /* 日期格式 */
        this.checkTimeType = function (val) { return /^\d{4}-\d{1,2}-\d{1,2}/.test(val); };
        /* 空白行 */
        this.checkBlank = function (val) { return /\n\s*\r/.test(val); };
        /* HTML标记 */
        this.checkHtml = function (val) { return new RegExp('<(\\S*?)[^>]*>.*?</\\1>|<.*? />').test(val); };
        /* 首尾空白字符 */
        this.checkFirstPlaceBlank = function (val) { return /^\s*|\s*$/.test(val); };
        /* 腾讯QQ号 */
        this.checkQQ = function (val) { return /[1-9][0-9]{4,}/.test(val); };
        /*  中国邮政编码 */
        this.checkPostOffice = function (val) { return /[1-9]\d{5}(?!\d)/.test(val); };
        /* IP地址 */
        this.checkIP = function (val) { return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(val); };
        /*----------------------------------------字符串校验-----------------------------------------------------------*/
        /* 日期格式 */
        this.checkDateFormat = function (val) { return /^\d{4}-\d{1,2}-\d{1,2}/.test(val); };
        /* 小写字母*/
        this.checkLowerCase = function (val) { return /^[a-z]+$/.test(val); };
        /* 大写字母*/
        this.checkUpperCase = function (val) { return /^[A-Z]+$/.test(val); };
        /* 大小写字母*/
        this.checkAlphabets = function (val) { return /^[A-Za-z]+$/.test(val); };
        /* 检验身份证 */
        this.checkCID = function (val) { return /^\d{15}|\d{18}$/.test(val); };
        /* 以字母开头，长度在6~18之间，只能包含字母、数字和下划线 */
        this.checkPasswordSpecification = function (val) { return /^[a-zA-Z]\w{5,17}$/.test(val); };
        /* 汉字 */
        this.checkDChineseCharacterDetection = function (val) { return /^[\u4e00-\u9fa5]*$/.test(val); };
        /* 由数字、26个英文字母或者下划线组成的字符串 */
        this.checkNumberUnderscoreletter = function (val) { return /^\w+$/.test(val); };
        /* 中文、英文、数字包括下划线 */
        this.checkChineseNumberEnglishUnderline = function (val) { return /^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test(val); };
        /* 中文、英文、数字但不包括下划线等符号 */
        this.checkSpecialCharacters = function (val) { return /^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(val); };
        /*---------------------------------------------数字校验-------------------------------------------------------*/
        /* 验证字符串是否是数字*/
        this.checkStrComposedOfNumber = function (val) { return /^[0-9]+.?[0-9]*$/.test(val); };
        /* 检测N为数 */
        this.checkNumberLength = function (options) { return new RegExp("^\\d{" + options.length + "}$").test(options.val); };
        /* 检测m-n位的数字 */
        this.checkAppointLen = function (options) { return new RegExp("^\\d{" + options.start + ',' + options.end + "}$").test(options.val); };
        /* 零和非零开头的数字 */
        this.checkZeroAndNonZero = function (val) { return /^(0|[1-9][0-9]*)$/.test(val); };
        /* 非零开头的最多带两位小数的数字 */
        this.checkTwoDecimalplaces = function (val) { return /^([1-9][0-9]*)+(.[0-9]{1,2})?$/.test(val); };
        /* 带1-2位小数的正数或负数 */
        this.checkDecimalplaces = function (val) { return /^(\-)?\d+(\.\d{1,2})?$/.test(val); };
        /* 正数、负数、和小数 */
        this.checkPND = function (val) { return /^(\-|\+)?\d+(\.\d+)?$/.test(val); };
        /* 有两位小数的正实数 */
        this.checkPositiveTDP = function (val) { return /^[0-9]+(.[0-9]{2})?$/.test(val); };
        /* 有1~3位小数的正实数 */
        this.checkOandTPositive = function (val) { return /^[0-9]+(.[0-9]{1,3})?$/.test(val); };
        /* 非零的正整数 */
        this.checkNonzeroPositive = function (val) { return /^[1-9]\d*/.test(val); };
        /* 非零的负整数 */
        this.checkNonzeroNegative = function (val) { return /^-[1-9]\d*$/.test(val); };
        /* 非负整数 */
        this.checkNotNegative = function (val) { return /^\d+$/.test(val); };
        /* 非正整数 */
        this.checkNotPositive = function (val) { return /^-[1-9]\d*|0$/.test(val); };
        /* 非负浮点数 */
        this.checkNotNegativeFloat = function (val) { return /^\d+(\.\d+)?$/.test(val); };
        /* 非正浮点数 */
        this.checkNotPositiveFloat = function (val) { return /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/.test(val); };
        /* 正浮点数 */
        this.checkPositiveFloat = function (val) { return /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/.test(val); };
        /* 负浮点数 */
        this.checkNegativeFloat = function (val) { return /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/.test(val); };
        /* 浮点数 */
        this.checkFloat = function (val) { return /^(-?\d+)(\.\d+)?$/.test(val); };
        /* 不以0开头的数字 */
        this.checkEndlessZero = function (val) { return /^(0|[1-9][0-9]*)$/.test(val); };
    }
    return reCheck;
}());
exports.default = reCheck;
