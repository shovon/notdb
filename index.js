'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.find = find;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

/**
 * Runs a query against an array of objects.
 *
 * @param {Array[Object]} arr
 * @param {Object} query
 * @return {Array[Object]}
 */

function find(arr, query) {
  var result = arr.filter(function (object) {
    var somePropertiesFail = Object.keys(query).some(function (key) {

      var queryProp = query[key];
      var objectProp = object[key];

      var passed = (function () {
        if (_lodash2['default'].isRegExp(queryProp) && _lodash2['default'].isString(objectProp)) {
          return queryProp.test(objectProp);
        }
        return queryProp === objectProp;
      })();

      return !passed;
    });

    // No properties failed.
    return !somePropertiesFail;
  });

  return result;
}

