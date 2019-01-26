import readTime from '../src';

describe('Testing Read Time', () => {
  it('should be able to return read time', () => {
    const testString = 'Test String';
    expect(readTime(testString)).toBeObject();
  });
});
