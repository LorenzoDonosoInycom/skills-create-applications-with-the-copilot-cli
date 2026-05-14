const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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
      expect(modulo(8, 3)).toBe(2);
    });

    test('should return zero when number divides evenly', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should handle modulo with negative dividend', () => {
      expect(modulo(-8, 3)).toBe(-2);
    });

    test('should handle modulo with negative divisor', () => {
      expect(modulo(8, -3)).toBe(2);
    });

    test('should handle modulo with both negative numbers', () => {
      expect(modulo(-8, -3)).toBe(-2);
    });

    test('should return the number when divisor is larger', () => {
      expect(modulo(5, 10)).toBe(5);
    });

    test('should handle decimal modulo', () => {
      expect(modulo(7.5, 2)).toBe(1.5);
    });

    test('should throw error on modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw specific error type on modulo by zero', () => {
      expect(() => modulo(5, 0)).toThrow(Error);
    });

    test('should handle modulo of one', () => {
      expect(modulo(1, 1)).toBe(0);
    });
  });

  describe('Power (power)', () => {
    test('should raise a number to a positive exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should return 1 when exponent is zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle negative exponents', () => {
      expect(power(2, -1)).toBe(0.5);
    });

    test('should handle negative base with positive exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle negative base with even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle decimal base and exponent', () => {
      expect(power(1.5, 2)).toBe(2.25);
    });

    test('should handle fractional exponents (roots)', () => {
      expect(power(16, 0.5)).toBe(4);
    });

    test('should raise to power of one', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should handle zero raised to positive power', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should handle large exponents', () => {
      expect(power(2, 10)).toBe(1024);
    });
  });

  describe('Square Root (squareRoot)', () => {
    test('should return square root of a perfect square', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should return square root of another perfect square', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should return 0 for square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should return 1 for square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should handle square root of decimal numbers', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should handle square root of non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.41421356, 5);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-4)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw specific error type for negative numbers', () => {
      expect(() => squareRoot(-1)).toThrow(Error);
    });

    test('should handle square root of large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should handle square root of very small positive numbers', () => {
      expect(squareRoot(0.0001)).toBe(0.01);
    });
  });

  describe('Integration Tests for New Operations', () => {
    test('should chain modulo and power operations', () => {
      const powerResult = power(2, 3);
      const moduloResult = modulo(powerResult, 5);
      expect(moduloResult).toBe(3);
    });

    test('should chain power and square root operations', () => {
      const powerResult = power(5, 2);
      const sqrtResult = squareRoot(powerResult);
      expect(sqrtResult).toBe(5);
    });

    test('should combine all operations in sequence', () => {
      const step1 = power(2, 4);
      const step2 = modulo(step1, 10);
      const step3 = squareRoot(step2);
      expect(step3).toBe(Math.sqrt(6));
    });
  });
});
