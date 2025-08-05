import isArray from '../src/utils/isArray';

describe('isArray测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isArray('')).toBeFalsy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isArray(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isArray(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isArray(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isArray(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isArray(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isArray({})).toBeFalsy();
  });
  it('输入：[] | 输出：true', () => {
    expect(isArray([])).toBeTruthy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isArray(() => {})).toBeFalsy();
  });
});
