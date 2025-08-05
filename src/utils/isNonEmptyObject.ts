import isObject from './isObject';

/**
 * 是否是非空对象
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isNonEmptyObject<T = unknown>(value: unknown): value is Record<string, T> {
  return isObject(value) && !!Reflect.ownKeys(value).length;
}

export default isNonEmptyObject;
