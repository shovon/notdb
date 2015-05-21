import _ from 'lodash';

/**
 * Runs a query against an array of objects.
 *
 * @param {Array[Object]} arr
 * @param {Object} query
 * @return {Array[Object]}
 */
export function find(arr, query) {
  const result = arr.filter(object => {
    const somePropertiesFail = Object.keys(query).some(key => {

      const queryProp = query[key];
      const objectProp = object[key];

      const passed = (() => {
        if (_.isRegExp(queryProp) && _.isString(objectProp)) {
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