import isNumber from './isNumber';

/**
 * 是否是正常的数值类型
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isValidNumber(value: unknown): value is number {
  return isNumber(value) && !isNaN(value);
}

export default isValidNumber;
