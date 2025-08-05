import isString from './isString';

/**
 * 是否是非空字符串
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isNonEmptyString(value: unknown): value is string {
  return isString(value) && !!value;
}

export default isNonEmptyString;
