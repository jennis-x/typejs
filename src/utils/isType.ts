/**
 * 是否是某一类型
 * @param value                   值
 * @param type                    类型
 * @returns {boolean}             返回布尔值
 */
function isType(value: unknown, type: string): boolean {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

export default isType;
