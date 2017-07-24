"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var safe = require("safe-regex");
/**
 * Checks if the array contains a certain object
 *
 * @export
 * @param {array} array - Array where to search
 * @param {object} object - Object to be checked
 * @param {string} [field] - Field to be compared
 * @returns
 */
function containsObject(array, object, field) {
    if (!array || array.length == 0) {
        return { "result": false, "element": {} };
    }
    if (!field) {
        array.forEach(function (el, index) {
            if (JSON.stringify(el) === JSON.stringify(object)) {
                return { "result": true, "element": el };
            }
            else if (index === array.length - 1) {
                return { "result": false, "element": {} };
            }
        });
    }
    else {
        array.forEach(function (el, index) {
            if (el[field].toString() == object[field].toString()) {
                return { "result": true, "element": el };
            }
            else if (index === array.length - 1) {
                return { "result": false, "element": {} };
            }
        });
    }
}
exports.containsObject = containsObject;
/**
 * Escape Regex input
 *
 * @export
 * @param {string} string - String to be escaped
 * @returns
 */
function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
exports.escapeRegex = escapeRegex;
/**
 * Ceil the given number
 *
 * @export
 * @param {number} number - Number to be ceiled
 * @param {number} [digits] - Number of fractional digits after the integer
 */
function ceil(number, digits) {
    if (!digits) {
        return Math.ceil(number);
    }
    var temp = Math.pow(10, digits);
    return (Math.ceil(number * temp) / temp);
}
exports.ceil = ceil;
/**
 * Floor the given number
 *
 * @export
 * @param {number} number - Number to be floored
 * @param {number} [digits] - Number of fractional digits after the integer
 */
function floor(number, digits) {
    if (!digits) {
        return Math.floor(number);
    }
    var temp = Math.pow(10, digits);
    return (Math.floor(number * temp) / temp);
}
exports.floor = floor;
/**
 * Round the given number
 *
 * @export
 * @param {number} number - Number to be rounded
 * @param {number} [digits] - Number of fractional digits after the integer
 */
function round(number, digits) {
    if (!digits) {
        return Math.round(number);
    }
    var temp = Math.pow(10, digits);
    return (Math.round(number * temp) / temp);
}
exports.round = round;
/**
 * Truncate the given number
 *
 * @export
 * @param {number} number - Number to be truncated
 * @param {number} [digits] - Number of fractional digits after the integer
 * @returns
 */
function truncate(number, digits) {
    if (!digits) {
        return Math.trunc(number);
    }
    var temp = Math.pow(10, digits);
    return (Math.trunc(number * temp) / temp);
}
exports.truncate = truncate;
/**
 * Remove spaces from the string
 *
 * @export
 * @param {string} text - text to be unspaced
 * @param {string} [occurence] - all | edges | first | last | beautify
 * @returns
 */
function unspace(text, occurence) {
    if (!occurence) {
        occurence = 'all';
    }
    if (!safe(text)) {
        return text;
    }
    var regex = {
        'all': /\s/g,
        'edges': /^\s*|\s*$/g,
        'first': /^\s*/g,
        'last': /\s*$/g,
        'spaces': /\s+/g
    };
    switch (occurence) {
        case 'all':
            return text.replace(regex.all, "");
        case 'edges':
            return text.replace(regex.edges, "");
        case 'first':
            return text.replace(regex.first, "");
        case 'last':
            return text.replace(regex.last, "");
        case 'beautify':
            text = text.replace(regex.edges, "");
            text = text.replace(regex.spaces, " ");
            return text;
        default:
            return text.replace(regex.all, "");
    }
}
exports.unspace = unspace;
/**
 * Converts the string to boolean value
 *
 * @export
 * @param {string} string
 * @returns
 */
function toBoolean(string) {
    if (string === "true" || string == true) {
        return true;
    }
    else {
        return false;
    }
}
exports.toBoolean = toBoolean;
/**
 * Checks if object is undefined
 *
 * @export
 * @param {object} value
 * @returns
 */
function isUndefined(value) {
    if (value === undefined) {
        return true;
    }
    else {
        return false;
    }
}
exports.isUndefined = isUndefined;
/**
 * Checks if object is null
 *
 * @export
 * @param {object} value
 * @returns
 */
function isNull(value) {
    if (value === null) {
        return true;
    }
    else {
        return false;
    }
}
exports.isNull = isNull;
/**
 * Converts degree angle to radiant
 *
 * @export
 * @param {number} angle - Angle in degree
 * @returns
 */
function deg2rad(angle) {
    return angle * 0.017453292519943295; // (angle / 180) * Math.PI;
}
exports.deg2rad = deg2rad;
/**
 * Validates the given email address
 *
 * @export
 * @param {string} email - Email Address
 * @returns
 */
function validateEmail(email) {
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
}
exports.validateEmail = validateEmail;
/**
 * Adds leading zeroes to the string untill it matches the given characters length
 *
 * @export
 * @param {string} string - String to be affected
 * @param {number} characters - Max characters to reach
 * @returns
 */
function leadingZeroes(string, characters) {
    if (!string)
        return '';
    var zeroes = string.length;
    var diff = characters - string.length;
    for (var i = 0; i < diff; i++) {
        string = "0" + string;
    }
    return string;
}
exports.leadingZeroes = leadingZeroes;
/**
 * Adds commas to the number at thousands, millions, ...
 *
 * @export
 * @param {string} number - number to be modified
 * @returns
 */
function commaSeparateNumber(number) {
    while (/(\d+)(\d{3})/.test(number.toString())) {
        number = number.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return number;
}
exports.commaSeparateNumber = commaSeparateNumber;
