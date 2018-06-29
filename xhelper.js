;
(function () {

  // Baseline setup
  // --------------

  // Establish the root object, `window` (`self`) in the browser, `global`
  // on the server, or `this` in some virtual machines. We use `self`
  // instead of `window` for `WebWorker` support.
  var root = typeof self == 'object' && self.self === self && self ||
    typeof global == 'object' && global.global === global && global ||
    this || {};

  // Save the previous value of the `xhelper` variable.
  var previousXhelper = root.xhelper;

  // Create a safe reference to the `xhelper` object for use below.
  var xhelper = function (obj) {
    if (obj instanceof xhelper) return obj;
    if (!(this instanceof xhelper)) return new xhelper(obj);
    this._wrapped = obj;
  };

  // Export the `xhelper` object for **Node.js**, with
  // backwards-compatibility for their old module API. If we're in
  // the browser, add `xhelper` as a global object.
  // (`nodeType` is checked to ensure that `module`
  // and `exports` are not HTML elements.)
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = xhelper;
    }
    exports.xhelper = xhelper;
  } else {
    root.xhelper = xhelper;
  }

  /**
   * Performs a binary search on the host array.
   *
   * @param {*} searchElement The item to search for within the array.
   * @return {Number} The index of the element which defaults to -1 when not found.
   */
  Array.prototype.binaryIndexOf = function (searchElement) {

    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
      currentIndex = (minIndex + maxIndex) / 2 | 0;
      currentElement = this[currentIndex];

      if (currentElement < searchElement) {
        minIndex = currentIndex + 1;
      } else if (currentElement > searchElement) {
        maxIndex = currentIndex - 1;
      } else {
        return currentIndex;
      }
    }

    return -1;
  }

  // Current version.
  xhelper.VERSION = '2.2.0';

  /**
   * Checks if the array contains a certain object
   *
   * @param {array} array Array where to search
   * @param {object} object Object to be checked
   * @param {string} [field] Field to be compared
   * @returns
   */
  xhelper.containsObject = function (array, object, field) {
    var element = {};
    var result = false;
    var condition = false;
    if (array && array.length > 0) {
      array.forEach(function (el, index) {
        if (!field) {
          condition = (JSON.stringify(el) === JSON.stringify(object));
        } else {
          condition = (el[field].toString() == object[field].toString());
        }
        if (condition) {
          result = true;
          element = el;
        } else if (index === array.length - 1) {
          result = false;
          element = {};
        }
      });
    }
    return {
      "result": result,
      "element": element
    };
  }

  /**
   * Ceil the given number
   *
   * @param {number} number Number to be ceiled
   * @param {number} [digits] Number of fractional digits after the integer
   */
  xhelper.ceil = function (number, digits) {
    if (!digits) {
      return Math.ceil(number);
    }
    var temp = Math.pow(10, digits);
    return (Math.ceil(number * temp) / temp);
  }

  /**
   * Floor the given number
   *
   * @param {number} number Number to be floored
   * @param {number} [digits] Number of fractional digits after the integer
   */
  xhelper.floor = function (number, digits) {
    if (!digits) {
      return Math.floor(number);
    }
    var temp = Math.pow(10, digits);
    return (Math.floor(number * temp) / temp);
  }

  /**
   * Round the given number
   *
   * @param {number} number Number to be rounded
   * @param {number} [digits] Number of fractional digits after the integer
   */
  xhelper.round = function (number, digits) {
    if (!digits) {
      return Math.round(number);
    }
    var temp = Math.pow(10, digits);
    return (Math.round(number * temp) / temp);
  }

  /**
   * Truncate the given number
   *
   * @param {number} number Number to be truncated
   * @param {number} [digits] Number of fractional digits after the integer
   * @returns
   */
  xhelper.truncate = function (number, digits) {
    if (!digits) {
      return Math.trunc(number);
    }
    var temp = Math.pow(10, digits);
    return (Math.trunc(number * temp) / temp);
  }

  /**
   * parseFloat by replacing commas by dots
   * 
   * @param {string} numString 
   */
  xhelper.parseFloat = function (numString) {
    numString += '';
    return parseFloat(numString.replace(',', '.').replace(' ', ''));
  }

  /**
   * Escape Regex input
   *
   * @param {string} string String to be escaped
   * @returns
   */
  xhelper.escapeRegex = function (string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  /**
   * Remove spaces from the string
   *
   * @param {string} text String to be unspaced
   * @param {string} [occurence] all | edges | first | last | beautify
   * @returns
   */
  xhelper.unspace = function (text, occurence) {
    if (!occurence) {
      occurence = 'all';
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

  /**
   * Generate a slug (url friendly string)
   * 
   * @param {string} text Target text title
   * @param {string} [delimeter] Replacing spaces
   * @returns 
   */
  xhelper.generateSlug = function (text, delimeter) {
    var slug = '';
    var delimeter = delimeter || '-';
    var spacesExp = new RegExp(/\s+/, 'gi');
    var allowedCharacters = /[^A-Za-z0-9-_]/;
    var regexp = new RegExp(allowedCharacters, 'gi');

    slug = text.replace(spacesExp, delimeter);
    slug = slug.replace(regexp, '');

    return slug;
  }

  /**
   * Copy object fields to another object
   * 
   * @param {object} src Source object
   * @param {object} dest Target object
   * @param {array} [fields] Fields to copy
   * @returns 
   */
  xhelper.objectCopy = function (src, dest, fields) {
    if (typeof src !== 'object') return {};
    if (typeof dest !== 'object') dest = {};
    if (fields && !Array.isArray(fields)) fields = [];
    if (!fields) {
      for (var prop in src) {
        dest[prop] = src[prop];
      }
    } else {
      fields.forEach(function (field) {
        dest[field] = src[field];
      });
    }
    return dest;
  }

  /**
   * Converts the string to boolean value
   *
   * @param {string} string
   * @returns
   */
  xhelper.toBoolean = function (string) {
    if (string === "true" || string == true) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Checks if object is undefined
   *
   * @param {object} value
   * @returns
   */
  xhelper.isUndefined = function (value) {
    if (value === undefined) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Checks if object is null
   *
   * @param {object} value
   * @returns
   */
  xhelper.isNull = function (value) {
    if (value === null) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Converts degree angle to radiant
   *
   * @param {number} angle Angle in degree
   * @returns
   */
  xhelper.deg2rad = function (angle) {
    return angle * 0.017453292519943295; // (angle / 180) * Math.PI;
  }

  /**
   * Validates the given email address
   *
   * @param {string} email Email Address
   * @returns
   */
  xhelper.validateEmail = function (email) {
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
  }

  /**
   * Adds leading zeroes to the string untill it matches the given characters length
   *
   * @param {string} string String to be affected
   * @param {number} characters Max characters to reach
   * @returns
   */
  xhelper.leadingZeroes = function (string, characters) {
    if (!string) return '';
    var zeroes = string.length;
    var diff = characters - string.length;
    for (var i = 0; i < diff; i++) {
      string = "0" + string;
    }
    return string;
  }

  /**
   * Adds commas to the number at thousands, millions, ...
   *
   * @param {string} number Number to be modified
   * @returns
   */
  xhelper.commaSeparateNumber = function (number) {
    while (/(\d+)(\d{3})/.test(number.toString())) {
      number = number.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }
    return number;
  }

  /**
   * Gets the last midnight timestamp according to the user date
   *
   * @param {number} hours Hours
   * @param {number} minutes Minutes
   * @param {number} seconds Seconds
   * @returns
   */
  xhelper.getLastMidnight = function (hours, minutes, seconds) {
    var timestamp = new Date().getTime();
    var time = timestamp - ((hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
    return time;
  }

  /**
   * Gets the last midnight of the first day of the month's timestamp according to the user date
   *
   * @param {number} day Day
   * @param {number} hours Hours
   * @param {number} minutes Minutes
   * @param {number} seconds Seconds
   * @returns
   */
  xhelper.getCurrentMonthFirstDay = function (day, hours, minutes, seconds) {
    var days = day - 1;
    var timestamp = Date.now();
    var time = timestamp - ((days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
    return time;
  }

  /**
   * Round number of seconds to the nearest greater number of minutes
   *
   * @param {number} seconds Number of seconds
   * @returns
   */
  xhelper.ceilToMinute = function (seconds) {
    var minutes = seconds / 60;
    return Math.ceil(minutes);
  }

  /**
   * Round number of seconds to the nearest lowest number of minutes
   *
   * @param {number} seconds Number of seconds
   * @returns
   */
  xhelper.floorToMinute = function (seconds) {
    var minutes = seconds / 60;
    return Math.floor(minutes);
  }

  /**
   * Get Random elements from an array (duplicates are allowed)
   * 
   * @param {array} array Array of elements 
   * @param {number} count Number of result elements
   * @returns
   */
  xhelper.getRandomElements = function (array, count) {
    var resultArray = [];
    for (var index = 0; index < count; index++) {
      resultArray.push(array[Math.floor(Math.random() * array.length)]);
    }
    return resultArray;
  }

  /**
   * Get Random unique elements from an array
   * 
   * @param {array} array Array of elements 
   * @param {number} count Number of result elements
   * @returns
   */
  xhelper.getUniqueElements = function (array, count) {
    var tmp = array.slice(array);
    var resultArray = [];

    for (var i = 0;
      (i < count && i < array.length); i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      resultArray.push(removed[0]);
    }
    return resultArray;
  }

  /**
   * Returns common elements between two arrays
   *
   * @param {array} array1 First Array
   * @param {array} array2 Second Array
   * @param {boolean} [sorted] If array2 is sorted (optimization)
   * @returns
   */
  xhelper.getMatches = function (array1, array2, sorted) {
    var elements = [];

    if (sorted) {
      var indexOf = 'binaryIndexOf';
    } else {
      var indexOf = 'indexOf';
    }

    array1.forEach(function (element) {
      var index = array2[indexOf](element);
      if (index >= 0) {
        elements.push(element);
      }
    }, this);

    return elements;
  }

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, xhelper registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define == 'function' && define.amd) {
    define('xhelper', [], function () {
      return xhelper;
    });
  }
}());