import isType from './isType';

/**
 * 是否是对象类型
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isObject<T = unknown>(value: unknown): value is Record<string, T> {
  return isType(value, 'Object');
}

export default isObject;
