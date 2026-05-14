const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition (add)', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(7, 0)).toBe(7);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 3)).toBe(7);
    });

    test('should subtract a larger number from smaller', () => {
      expect(subtract(3, 10)).toBe(-7);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract a negative number (adding)', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(5.5, 2.3)).toBeCloseTo(3.2);
    });
  });

  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply a positive and negative number', () => {
      expect(multiply(-4, 5)).toBe(-20);
    });

    test('should multiply by zero', () => {
      expect(multiply(10, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply negative decimals', () => {
      expect(multiply(-1.5, 2)).toBe(-3);
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('Division (divide)', () => {
    test('should divide two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide a positive by negative number', () => {
      expect(divide(-10, 2)).toBe(-5);
    });

    test('should divide a negative by positive number', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should return decimal result when applicable', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test('should divide by one', () => {
      expect(divide(7, 1)).toBe(7);
    });

    test('should throw error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw specific error type on division by zero', () => {
      expect(() => divide(5, 0)).toThrow(Error);
    });

    test('should handle decimal division', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should handle small numbers close to zero', () => {
      expect(divide(1, 1000)).toBe(0.001);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });
  });

  describe('Edge Cases', () => {
    test('should handle very small decimal numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle operations resulting in negative zero', () => {
      expect(subtract(0, 0)).toBe(0);
    });

    test('should maintain precision with decimal operations', () => {
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 5);
    });
  });
});
