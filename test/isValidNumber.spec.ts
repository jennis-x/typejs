import isValidNumber from '../src/utils/isValidNumber';

describe('isValidNumber测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isValidNumber('')).toBeFalsy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isValidNumber(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：true', () => {
    expect(isValidNumber(0)).toBeTruthy();
  });
  it('输入：false | 输出：false', () => {
    expect(isValidNumber(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isValidNumber(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isValidNumber(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isValidNumber({})).toBeFalsy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isValidNumber([])).toBeFalsy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isValidNumber(() => {})).toBeFalsy();
  });
});
