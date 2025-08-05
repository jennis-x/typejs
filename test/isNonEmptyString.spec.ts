import isNonEmptyString from '../src/utils/isNonEmptyString';

describe('isNonEmptyString测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isNonEmptyString('')).toBeFalsy();
  });
  it('输入：非空字符串 | 输出：true', () => {
    expect(isNonEmptyString(' ')).toBeTruthy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isNonEmptyString(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isNonEmptyString(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isNonEmptyString(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isNonEmptyString(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isNonEmptyString(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isNonEmptyString({})).toBeFalsy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isNonEmptyString([])).toBeFalsy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isNonEmptyString(() => {})).toBeFalsy();
  });
});
