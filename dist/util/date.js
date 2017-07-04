"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLastMidnight(hours, minutes, seconds) {
    var timestamp = new Date().getTime();
    var time = timestamp - ((hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
    return time;
}
exports.getLastMidnight = getLastMidnight;
function getCurrentMonthFirstDay(day, hours, minutes, seconds) {
    var days = day - 1;
    var timestamp = Date.now();
    var time = timestamp - ((days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
    return time;
}
exports.getCurrentMonthFirstDay = getCurrentMonthFirstDay;
function ceilToMinute(seconds) {
    var minutes = seconds / 60;
    return Math.ceil(minutes);
}
exports.ceilToMinute = ceilToMinute;
