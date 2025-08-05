import isNull from '../src/utils/isNull';

describe('isNull测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isNull('')).toBeFalsy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isNull(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isNull(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isNull(false)).toBeFalsy();
  });
  it('输入：null | 输出：true', () => {
    expect(isNull(null)).toBeTruthy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isNull(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isNull({})).toBeFalsy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isNull([])).toBeFalsy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isNull(() => {})).toBeFalsy();
  });
});
