import isType from './isType';

interface IFunction {
  (...args: unknown[]): unknown;
}

/**
 * 是否是函数类型
 * @param value                   值
 * @returns {boolean}             返回布尔值
 */
function isFunction<T = IFunction>(value: unknown): value is T {
  return isType(value, 'Function');
}

export default isFunction;
