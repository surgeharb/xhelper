import * as Q from "q"
import * as safe from "safe-regex"

/**
 * Checks if the array contains a certain object
 *
 * @export
 * @param {array} array - Array where to search
 * @param {object} object - Object to be checked
 * @param {string} [field] - Field to be compared
 * @returns
 */
export function containsObject(array: object[], object: object, field?: string) {
  let deferred = Q.defer();

  if (!array || array.length == 0) {
    deferred.resolve({ "result": false });
    return deferred.promise;
  }

  if (!field) {
    array.forEach((el, index) => {
      if (JSON.stringify(el) === JSON.stringify(object)) {
        deferred.resolve({ "result": true, "element": el });
      } else if (index === array.length - 1) {
        deferred.resolve({ "result": false });
      }
    })
  } else {
    array.forEach((el: object, index: number) => {
      if (el[field].toString() == object[field].toString()) {
        deferred.resolve({ "result": true, "element": el });
      } else if (index === array.length - 1) {
        deferred.resolve({ "result": false });
      }
    })
  }

  return deferred.promise;
}

/**
 * Escape Regex input
 * 
 * @export
 * @param {string} string - String to be escaped
 * @returns 
 */
export function escapeRegex(string: string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * Ceil the given number
 * 
 * @export
 * @param {number} number - Number to be ceiled
 * @param {number} [digits] - Number of fractional digits after the integer
 */
export function ceil(number: number, digits?: number) {
  if (!digits) {
    return Math.ceil(number);
  }
  let temp = Math.pow(10, digits);
  return (Math.ceil(number * temp) / temp);
}

/**
 * Floor the given number
 * 
 * @export
 * @param {number} number - Number to be floored
 * @param {number} [digits] - Number of fractional digits after the integer
 */
export function floor(number: number, digits?: number) {
  if (!digits) {
    return Math.floor(number);
  }
  let temp = Math.pow(10, digits);
  return (Math.floor(number * temp) / temp);
}

/**
 * Round the given number
 * 
 * @export
 * @param {number} number - Number to be rounded
 * @param {number} [digits] - Number of fractional digits after the integer
 */
export function round(number: number, digits?: number) {
  if (!digits) {
    return Math.round(number);
  }
  let temp = Math.pow(10, digits);
  return (Math.round(number * temp) / temp);
}

/**
 * Truncate the given number
 *
 * @export
 * @param {number} number - Number to be truncated
 * @param {number} [digits] - Number of fractional digits after the integer
 * @returns 
 */
export function truncate(number: number, digits?: number) {
  if (!digits) {
    return Math.trunc(number);
  }
  let temp = Math.pow(10, digits);
  return (Math.trunc(number * temp) / temp);
}

/**
 * Remove spaces from the string
 *
 * @export
 * @param {string} text - text to be unspaced
 * @param {string} [occurence] - all | edges | first | last | beautify
 * @returns
 */
export function unspace(text: string, occurence?: string) {
  if (!occurence) {
    occurence = 'all';
  }

  if (!safe(text)) {
    return text;
  }

  let regex = {
    'all': /\s/g,
    'edges': /^\s*|\s*$/g,
    'first': /^\s*/g,
    'last': /\s*$/g,
    'spaces': /\s+/g
  }

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

/**
 * Converts the string to boolean value
 *
 * @export
 * @param {string} string
 * @returns
 */
export function toBoolean(string: string | boolean) {
  if (string === "true" || string == true) {
    return true;
  } else {
    return false;
  }
}

/**
 * Checks if object is undefined
 *
 * @export
 * @param {object} value
 * @returns
 */
export function isUndefined(value: object) {
  if (value === undefined) {
    return true;
  } else {
    return false;
  }
}

/**
 * Checks if object is null
 *
 * @export
 * @param {object} value
 * @returns
 */
export function isNull(value: object) {
  if (value === null) {
    return true;
  } else {
    return false;
  }
}

/**
 * Converts degree angle to radiant
 *
 * @export
 * @param {number} angle - Angle in degree 
 * @returns 
 */
export function deg2rad(angle: number) {
  return angle * 0.017453292519943295 // (angle / 180) * Math.PI;
}

/**
 * Validates the given email address
 *
 * @export
 * @param {string} email - Email Address 
 * @returns 
 */
export function validateEmail(email: string) {
  var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
}

/**
 * Adds leading zeroes to the string untill it matches the given characters length
 *
 * @export
 * @param {string} string - String to be affected 
 * @param {number} characters - Max characters to reach
 * @returns
 */
export function leadingZeroes(string: string, characters: number) {
  if (!string) return '';
  let zeroes = string.length;
  var diff = characters - string.length;
  for (var i = 0; i < diff; i++) {
    string = "0" + string;
  }
  return string;
}

/**
 * Adds commas to the number at thousands, millions, ...
 *
 * @export
 * @param {string} number - number to be modified
 * @returns 
 */
export function commaSeparateNumber(number: string) {
  while (/(\d+)(\d{3})/.test(number.toString())) {
    number = number.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return number;
}