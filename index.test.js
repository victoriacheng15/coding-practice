const reverseString = require("./daily-byte-challenges/001-reverse-string")
// jest testing
describe('check for reversed string', () => {
    test('reverse 1 word', () => {
      expect(reverseString('cat')).toBe('tac');
    });
  
    test('reverse more than 1 word', () => {
      expect(reverseString('The Daily Byte')).toBe('etyB yliaD ehT');
    });
  
    test('reverse 1 word that is the same as before', () => {
      expect(reverseString('civic')).toBe('civic');
    });
});