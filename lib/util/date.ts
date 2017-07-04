/**
 * Gets the last midnight timestamp according to the user date
 *
 * @param {number} hours - Hours
 * @param {number} minutes - Minutes
 * @param {number} seconds - Seconds
 * @returns
 */
export function getLastMidnight(hours: number, minutes: number, seconds: number) {
  let timestamp = new Date().getTime();
  let time = timestamp - ((hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
  return time;
}

/**
 * Gets the last midnight of the first day of the month's timestamp according to the user date
 *
 * @param {number} day - Day
 * @param {number} hours - Hours
 * @param {number} minutes - Minutes
 * @param {number} seconds- Seconds
 * @returns
 */
export function getCurrentMonthFirstDay(day: number, hours: number, minutes: number, seconds: number) {
  let days = day - 1;
  let timestamp = Date.now();
  let time = timestamp - ((days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
  return time;
}

/**
 * Round number of seconds to the nearest greater number of minutes
 * 
 * @param {number} seconds - Number of seconds
 * @returns
 */
export function ceilToMinute(seconds: number) {
  let minutes = seconds / 60;
  return Math.ceil(minutes);
}