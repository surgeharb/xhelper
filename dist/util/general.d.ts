/**
 * Checks if the array contains a certain object
 *
 * @export
 * @param {array} array - Array where to search
 * @param {object} object - Object to be checked
 * @param {string} [field] - Field to be compared
 * @returns
 */
export declare function containsObject(array: object[], object: object, field?: string): {
    "result": boolean;
    "element": {};
} | undefined;
/**
 * Escape Regex input
 *
 * @export
 * @param {string} string - String to be escaped
 * @returns
 */
export declare function escapeRegex(string: string): string;
/**
 * Ceil the given number
 *
 * @export
 * @param {number} number - Number to be ceiled
 * @param {number} [digits] - Number of fractional digits after the integer
 */
export declare function ceil(number: number, digits?: number): number;
/**
 * Floor the given number
 *
 * @export
 * @param {number} number - Number to be floored
 * @param {number} [digits] - Number of fractional digits after the integer
 */
export declare function floor(number: number, digits?: number): number;
/**
 * Round the given number
 *
 * @export
 * @param {number} number - Number to be rounded
 * @param {number} [digits] - Number of fractional digits after the integer
 */
export declare function round(number: number, digits?: number): number;
/**
 * Truncate the given number
 *
 * @export
 * @param {number} number - Number to be truncated
 * @param {number} [digits] - Number of fractional digits after the integer
 * @returns
 */
export declare function truncate(number: number, digits?: number): number;
/**
 * Remove spaces from the string
 *
 * @export
 * @param {string} text - text to be unspaced
 * @param {string} [occurence] - all | edges | first | last | beautify
 * @returns
 */
export declare function unspace(text: string, occurence?: string): string;
/**
 * Converts the string to boolean value
 *
 * @export
 * @param {string} string
 * @returns
 */
export declare function toBoolean(string: string | boolean): boolean;
/**
 * Checks if object is undefined
 *
 * @export
 * @param {object} value
 * @returns
 */
export declare function isUndefined(value: object): boolean;
/**
 * Checks if object is null
 *
 * @export
 * @param {object} value
 * @returns
 */
export declare function isNull(value: object): boolean;
/**
 * Converts degree angle to radiant
 *
 * @export
 * @param {number} angle - Angle in degree
 * @returns
 */
export declare function deg2rad(angle: number): number;
/**
 * Validates the given email address
 *
 * @export
 * @param {string} email - Email Address
 * @returns
 */
export declare function validateEmail(email: string): boolean;
/**
 * Adds leading zeroes to the string untill it matches the given characters length
 *
 * @export
 * @param {string} string - String to be affected
 * @param {number} characters - Max characters to reach
 * @returns
 */
export declare function leadingZeroes(string: string, characters: number): string;
/**
 * Adds commas to the number at thousands, millions, ...
 *
 * @export
 * @param {string} number - number to be modified
 * @returns
 */
export declare function commaSeparateNumber(number: string): string;
