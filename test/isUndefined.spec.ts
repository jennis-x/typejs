import isUndefined from '../src/utils/isUndefined';

describe('isUndefined测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isUndefined('')).toBeFalsy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isUndefined(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isUndefined(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isUndefined(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isUndefined(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：true', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isUndefined({})).toBeFalsy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isUndefined([])).toBeFalsy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isUndefined(() => {})).toBeFalsy();
  });
});
