/**
 * Checks if the array contains a certain object
 *
 * @param {array} array - Array where to search
 * @param {object} object - Object to be checked
 * @param {string} [field] - Field to be compared
 *
 * @return {promise}
 */
export declare function containsObject(array: object[], object: object, field: string): any;
/**
 * Converts the string to boolean value
 *
 * @param {string} string
 * @return {boolean}
 */
export declare function toBoolean(string: string | boolean): boolean;
/**
 * Checks if object is undefined
 *
 * @param {object} value
 * @return {boolean}
 */
export declare function isUndefined(value: object): boolean;
/**
 * Checks if object is null
 *
 * @param {object} value
 * @returns
 */
export declare function isNull(value: object): boolean;
/**
 * Converts degree angle to radiant
 *
 * @param {number} angle - Angle in degree
 * @returns
 */
export declare function deg2rad(angle: number): number;
/**
 * Validates the given email address
 *
 * @param {string} email - Email Address
 * @returns
 */
export declare function validateEmail(email: string): boolean;
/**
 * Adds leading zeroes to the string untill it matches the given characters length
 *
 * @param {string} string
 * @param {number} characters
 * @return
 */
export declare function leadingZeroes(string: string, characters: number): string;
/**
 * Adds commas to the number at thousands, millions, ...
 *
 * @param {string} number - number to be modified
 * @returns
 */
export declare function commaSeparateNumber(number: string): string;
