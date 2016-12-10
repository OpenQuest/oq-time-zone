'use strict';

/**
 * Pretty time zone.优化时区
 * @param  {Date} date 可选，Date对象
 * @return {String}      时区的时分表示，如+8(东八区)，-2(西二区) +4:30(缅甸)
 */
var timeZone = module.exports = function(date) {
    // 获得本机时间相对于UTC时间的时区偏移
    // UTC - localtime, 有正负号，用分钟表示
    var offset = (date || new Date()).getTimezoneOffset();
    var absOffset = Math.abs(offset);
    // 取小时整数
    var hours = Math.floor(absOffset / 60);
    // 取分钟
    var minutes = absOffset % 60;
    // 分钟部分的表示，巧妙利用slice(-2)，统一处理分钟是一位数和两位数的情况
    var minutesOut = minutes > 0 ? ':' + ('0' + minutes).slice(-2) : '';

    // 当为零时区时，返回'0'
    if (offset == 0) {
        return '0';
    }
    // 非零时区，返回符号
    return (offset < 0 ? '+' : '-') + hours + minutesOut;
};


/**
 * 返回值（字符串）
 * 本地时间领先于UTC时间，返回”+“
 * 本地时间落后于UTC时间，返回"_"
 * 零区时区为‘0’
 * 有些地区因夏令时、地理、历史原因，时区不是整数，返回"-9:30"、“+4:30”等形式
 */