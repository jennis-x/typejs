import isType from './isType';

/**
 * 是否是`undefined`类型
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isUndefined(value: unknown): value is undefined {
  return isType(value, 'Undefined');
}

export default isUndefined;
