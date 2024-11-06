const { soma } = require('./index');

describe('soma function', () => {
  test('returns the sum of all numbers', () => {
    expect(soma(1, 2, 3)).toBe(6);
    expect(soma(10, 20, 30)).toBe(60);
    expect(soma(0, 0, 0)).toBe(0);
  });

  test('returns 0 if no arguments are passed', () => {
    expect(soma()).toBe(0);
  });

  test('returns null if any argument is not a number', () => {
    expect(soma(1, 2, "3")).toBeNull();
    expect(soma(1, "a", 3)).toBeNull();
    expect(soma(true, 1)).toBeNull();
  });

  test('handles negative numbers', () => {
    expect(soma(-1, -2, -3)).toBe(-6);
    expect(soma(-10, 20, -30)).toBe(-20);
  });
});
