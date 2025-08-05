import isType from './isType';

/**
 * 是否是数值类型
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isNumber(value: unknown): value is number {
  return isType(value, 'Number');
}

export default isNumber;
