import isBoolean from '../src/utils/isBoolean';

describe('isBoolean测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isBoolean('')).toBeFalsy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isBoolean(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isBoolean(0)).toBeFalsy();
  });
  it('输入：false | 输出：true', () => {
    expect(isBoolean(false)).toBeTruthy();
  });
  it('输入：null | 输出：false', () => {
    expect(isBoolean(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isBoolean(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isBoolean({})).toBeFalsy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isBoolean([])).toBeFalsy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isBoolean(() => {})).toBeFalsy();
  });
});
