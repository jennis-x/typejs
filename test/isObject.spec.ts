import isObject from '../src/utils/isObject';

describe('isObject测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isObject('')).toBeFalsy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isObject(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isObject(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isObject(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isObject(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isObject(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：true', () => {
    expect(isObject({})).toBeTruthy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isObject([])).toBeFalsy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isObject(() => {})).toBeFalsy();
  });
});
