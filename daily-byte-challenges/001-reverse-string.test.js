const reverseString = require('./001-reverse-string');

describe('reverse string test suite', () => {
  test('reverses a single word', () => {
    expect(reverseString('cat')).toBe('tac');
  })
  test('reverses multiple words', () => {
    expect(reverseString('The Daily Byte')).toBe('etyB yliaD ehT');
  })
  test('reverses palindromes', () => {
    expect(reverseString('civic')).toBe('civic');
  })
});