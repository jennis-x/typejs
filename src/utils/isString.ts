import isType from './isType';

/**
 * 是否是字符串类型
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isString(value: unknown): value is string {
  return isType(value, 'String');
}

export default isString;
