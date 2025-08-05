import isNonEmptyArray from '../src/utils/isNonEmptyArray';

describe('isNonEmptyArray测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isNonEmptyArray('')).toBeFalsy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isNonEmptyArray(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isNonEmptyArray(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isNonEmptyArray(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isNonEmptyArray(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isNonEmptyArray(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isNonEmptyArray({})).toBeFalsy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isNonEmptyArray([])).toBeFalsy();
  });
  it('输入：[{}] | 输出：true', () => {
    expect(isNonEmptyArray([{}])).toBeTruthy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isNonEmptyArray(() => {})).toBeFalsy();
  });
});
