import isString from './isString';
import isArray from './isArray';
import isObject from './isObject';
import isUndefined from './isUndefined';
import isNull from './isNull';
import isNumber from './isNumber';

/**
 * 是否空
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isEmpty(value: unknown): boolean {
  if (isString(value) || isArray(value)) return !value.length;
  else if (isObject(value)) return !Reflect.ownKeys(value).length;
  else if (isUndefined(value) || isNull(value) || (isNumber(value) && isNaN(value))) return true;
  return false;
}

export default isEmpty;
