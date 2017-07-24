/**
 * Gets the last midnight timestamp according to the user date
 *
 * @export
 * @param {number} hours - Hours
 * @param {number} minutes - Minutes
 * @param {number} seconds - Seconds
 * @returns
 */
export declare function getLastMidnight(hours: number, minutes: number, seconds: number): number;
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
export declare function getCurrentMonthFirstDay(day: number, hours: number, minutes: number, seconds: number): number;
/**
 * Round number of seconds to the nearest greater number of minutes
 *
 * @export
 * @param {number} seconds - Number of seconds
 * @returns
 */
export declare function ceilToMinute(seconds: number): number;
