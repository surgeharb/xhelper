"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the last midnight timestamp according to the user date
 *
 * @export
 * @param {number} hours - Hours
 * @param {number} minutes - Minutes
 * @param {number} seconds - Seconds
 * @returns
 */
function getLastMidnight(hours, minutes, seconds) {
    var timestamp = new Date().getTime();
    var time = timestamp - ((hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
    return time;
}
exports.getLastMidnight = getLastMidnight;
/**
 * Gets the last midnight of the first day of the month's timestamp according to the user date
 *
 * @export
 * @param {number} day - Day
 * @param {number} hours - Hours
 * @param {number} minutes - Minutes
 * @param {number} seconds- Seconds
 * @returns
 */
function getCurrentMonthFirstDay(day, hours, minutes, seconds) {
    var days = day - 1;
    var timestamp = Date.now();
    var time = timestamp - ((days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
    return time;
}
exports.getCurrentMonthFirstDay = getCurrentMonthFirstDay;
/**
 * Round number of seconds to the nearest greater number of minutes
 *
 * @export
 * @param {number} seconds - Number of seconds
 * @returns
 */
function ceilToMinute(seconds) {
    var minutes = seconds / 60;
    return Math.ceil(minutes);
}
exports.ceilToMinute = ceilToMinute;
