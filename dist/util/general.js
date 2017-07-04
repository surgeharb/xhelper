"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var q_1 = require("q");
/**
 * Checks if the array contains a certain object
 *
 * @param {array} array - Array where to search
 * @param {object} object - Object to be checked
 * @param {string} [field] - Field to be compared
 *
 * @return {promise}
 */
function containsObject(array, object, field) {
    var deferred = q_1.Q.defer();
    if (!array || array.length == 0) {
        deferred.resolve(false);
        return deferred.promise;
    }
    if (!field) {
        array.forEach(function (el, index) {
            if (JSON.stringify(el) === JSON.stringify(object)) {
                deferred.resolve({ "result": true, "element": el });
            }
            else if (index === array.length - 1) {
                deferred.resolve({ "result": false });
            }
        });
    }
    else {
        array.forEach(function (el, index) {
            if (el[field].toString() == object[field].toString()) {
                deferred.resolve({ "result": true, "element": el });
            }
            else if (index === array.length - 1) {
                deferred.resolve({ "result": false });
            }
        });
    }
    return deferred.promise;
}
exports.containsObject = containsObject;
/**
 * Converts the string to boolean value
 *
 * @param {string} string
 * @return {boolean}
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
 * @param {object} value
 * @return {boolean}
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
 * @param {string} string
 * @param {number} characters
 * @return
 */
function leadingZeroes(string, characters) {
    if (string === undefined || string === null)
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
