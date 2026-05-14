const { add, subtract, multiply, divide, modulo, power, sqrt } = require('../calculator');

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

  describe('Modulo (modulo)', () => {
    test('should return remainder of two positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should return zero when evenly divisible', () => {
      expect(modulo(9, 3)).toBe(0);
    });

    test('should handle negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should throw error on modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw specific error type on modulo by zero', () => {
      expect(() => modulo(5, 0)).toThrow(Error);
    });

    test('should handle decimal numbers', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });
  });

  describe('Exponentiation (power)', () => {
    test('should raise a number to a positive power', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should return 1 when exponent is zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should return the base when exponent is one', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should handle negative exponents', () => {
      expect(power(2, -1)).toBe(0.5);
    });

    test('should handle fractional exponents', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle negative base with even exponent', () => {
      expect(power(-3, 2)).toBe(9);
    });

    test('should handle negative base with odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle zero base', () => {
      expect(power(0, 5)).toBe(0);
    });
  });

  describe('Square Root (sqrt)', () => {
    test('should return square root of a perfect square', () => {
      expect(sqrt(16)).toBe(4);
    });

    test('should return square root of 0', () => {
      expect(sqrt(0)).toBe(0);
    });

    test('should return square root of 1', () => {
      expect(sqrt(1)).toBe(1);
    });

    test('should handle non-perfect squares', () => {
      expect(sqrt(2)).toBeCloseTo(1.41421356, 5);
    });

    test('should handle large numbers', () => {
      expect(sqrt(1000000)).toBe(1000);
    });

    test('should throw error on negative number', () => {
      expect(() => sqrt(-1)).toThrow('Square root of a negative number is not allowed');
    });

    test('should throw specific error type on negative number', () => {
      expect(() => sqrt(-4)).toThrow(Error);
    });
  });
});
