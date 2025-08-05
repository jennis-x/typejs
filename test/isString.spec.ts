import isString from '../src/utils/isString';

describe('isString测试', () => {
  it('输入：空字符串 | 输出：true', () => {
    expect(isString('')).toBeTruthy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isString(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isString(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isString(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isString(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isString(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isString({})).toBeFalsy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isString([])).toBeFalsy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isString(() => {})).toBeFalsy();
  });
});
