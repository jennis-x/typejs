import isFunction from '../src/utils/isFunction';

describe('isFunction测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isFunction('')).toBeFalsy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isFunction(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isFunction(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isFunction(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isFunction(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isFunction(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isFunction({})).toBeFalsy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isFunction([])).toBeFalsy();
  });
  it('输入：函数 | 输出：true', () => {
    expect(isFunction(() => {})).toBeTruthy();
  });
});
