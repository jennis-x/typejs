import isType from '../src/utils/isType';

class Other {
    get [Symbol.toStringTag]() {
        return 'Other';
    }
}

describe('isType测试', () => {
  it('输入：new Other | 输出：true', () => {
    expect(isType(new Other, 'Other')).toBeTruthy();
  });
});