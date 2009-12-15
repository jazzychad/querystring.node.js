/*
 * util.js
 *  - utility helper functions for querystring module
 *
 * Chad Etzel
 *
 * Copyright (c) 2009, Yahoo! Inc. and Chad Etzel
 * BSD License (see LICENSE.md for info)
 *
 */


if (!Array.map) {
  Array.map = function(arr, fun /*, thisp*/)
    {
      var len = arr.length;
      if (typeof fun != "function")
	throw new TypeError();
            
      var res = new Array(len);
      var thisp = arguments[2];
      for (var i = 0; i < len; i++) {
	if (i in arr)
	  res[i] = fun.call(thisp, arr[i], i, arr);
      }
            
      return res;
    };
}


if (!Array.reduce) {
  Array.reduce = function(arr, initial, fun /*, context*/) {
    var len = arr.length;
    if (typeof fun != "function") {
      throw new TypeError();
    }
        
    // no value to return if no initial value and an empty array
    if (len == 0 && arguments.length == 1) {
      throw new TypeError();
    }
        
    var i = 0;
    if (arguments.length >= 2) {
      var rv = arguments[1]; /* initial */
    } else{
      do {
	if (i in arr) {
	  rv = arr[i++];
	  break;
	}
                
	// if array contains no values, no initial value to return
	if (++i >= len) {
	  throw new TypeError();
	}
      } while (true);
    }
        
    for (; i < len; i++) {
      if (i in arr) {
	rv = fun.call(null, rv, arr[i], i, arr);
      }
    }
        
    return rv;
  };
}



function is (type, obj) {
  return (Object.prototype.toString.call(obj) === '[object '+type+']');
}

function isArray (obj) {
  return is("Array", obj);
}

function isObject (obj) {
  return is("Object", obj);
}

function isString (obj) {
  return is("String", obj);
}

function isNumber (obj) {
  return is("Number", obj);
}

function isBoolean (obj) {
  return is("Boolean", obj);
}

function isNull (obj) {
  return (is("global", obj) && obj === null);
}

function isUndefined (obj) {
  return (is("global", obj) && obj === undefined);
}

/* exports */

exports.map = Array.map;
exports.reduce = Array.reduce;

exports.is = is;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isBoolean = isBoolean;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
