import isType from './isType';

/**
 * 是否是`null`类型
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isNull(value: unknown): value is null {
  return isType(value, 'Null');
}

export default isNull;
