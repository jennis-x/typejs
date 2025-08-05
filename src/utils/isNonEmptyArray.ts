import isArray from './isArray';

/**
 * 是否是非空数组
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isNonEmptyArray<T = unknown>(value: unknown): value is T[] {
  return isArray(value) && !!value.length;
}

export default isNonEmptyArray;
