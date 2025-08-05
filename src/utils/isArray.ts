import isType from './isType';

/**
 * 是否是数组类型
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isArray<T = unknown>(value: unknown): value is T[] {
  return isType(value, 'Array');
}

export default isArray;
