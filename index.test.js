const  { convertNumberToWords } = require('./index');

describe('Time to words', () => {
  it('Handles one', () => {
    const numberInWords = convertNumberToWords(1);
    expect(numberInWords).toBe('one');
  });

  it('Handles numbers between 10 and 20', () => {
    const numberInWords = convertNumberToWords(14);
    expect(numberInWords).toBe('fourteen');
  });

  it('Handles numbers between 20 and 100', () => {
    const numberInWords = convertNumberToWords(27);
    expect(numberInWords).toBe('twenty seven');
  });

  it('Handles numbers where second digit is zero', () => {
    const numberInWords = convertNumberToWords(40);
    expect(numberInWords).toBe('forty');
  });

  it('Handles numbers between 100 and 1000', () => {
    const numberInWords = convertNumberToWords(256);
    expect(numberInWords).toBe('two hundred fifty six');
  });

  it('Handles 300', () => {
    const numberInWords = convertNumberToWords(300);
    expect(numberInWords).toBe('three hundred');
  });
});