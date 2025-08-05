import isType from './isType';

/**
 * 是否是布尔类型
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isBoolean(value: unknown): value is boolean {
  return isType(value, 'Boolean');
}

export default isBoolean;
