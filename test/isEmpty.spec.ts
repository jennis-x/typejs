import isEmpty from '../src/utils/isEmpty';

describe('isEmpty测试', () => {
  it('输入：空字符串 | 输出：true', () => {
    expect(isEmpty('')).toBeTruthy();
  });
  it('输入：NaN | 输出：true', () => {
    expect(isEmpty(NaN)).toBeTruthy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isEmpty(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isEmpty(false)).toBeFalsy();
  });
  it('输入：null | 输出：true', () => {
    expect(isEmpty(null)).toBeTruthy();
  });
  it('输入：undefined | 输出：true', () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });
  it('输入：{} | 输出：true', () => {
    expect(isEmpty({})).toBeTruthy();
  });
  it('输入：[] | 输出：true', () => {
    expect(isEmpty([])).toBeTruthy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isEmpty(() => {})).toBeFalsy();
  });
});
