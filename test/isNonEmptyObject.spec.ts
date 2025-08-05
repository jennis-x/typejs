import isNonEmptyObject from '../src/utils/isNonEmptyObject';

describe('isNonEmptyObject测试', () => {
  it('输入：空字符串 | 输出：false', () => {
    expect(isNonEmptyObject('')).toBeFalsy();
  });
  it('输入：NaN | 输出：false', () => {
    expect(isNonEmptyObject(NaN)).toBeFalsy();
  });
  it('输入：0 | 输出：false', () => {
    expect(isNonEmptyObject(0)).toBeFalsy();
  });
  it('输入：false | 输出：false', () => {
    expect(isNonEmptyObject(false)).toBeFalsy();
  });
  it('输入：null | 输出：false', () => {
    expect(isNonEmptyObject(null)).toBeFalsy();
  });
  it('输入：undefined | 输出：false', () => {
    expect(isNonEmptyObject(undefined)).toBeFalsy();
  });
  it('输入：{} | 输出：false', () => {
    expect(isNonEmptyObject({})).toBeFalsy();
  });
  it('输入：{a:[]} | 输出：true', () => {
    expect(isNonEmptyObject({ a: [] })).toBeTruthy();
  });
  it('输入：[] | 输出：false', () => {
    expect(isNonEmptyObject([])).toBeFalsy();
  });
  it('输入：函数 | 输出：false', () => {
    expect(isNonEmptyObject(() => {})).toBeFalsy();
  });
});
