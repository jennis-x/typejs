import isNumber from '../src/utils/isNumber';

describe('isNumber测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isNumber('')).toBeFalsy();
  });
  it('输入：NaN | 输出：true', () => {
    expect(isNumber(NaN)).toBeTruthy();
  });
  it('输入：0 | 输出：true', () => {
    expect(isNumber(0)).toBeTruthy();
  });
  it('输入：false | 输出：false', () => {
    expect(isNumber(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isNumber(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isNumber(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isNumber({})).toBeFalsy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isNumber([])).toBeFalsy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isNumber(() => {})).toBeFalsy();
  });
});
