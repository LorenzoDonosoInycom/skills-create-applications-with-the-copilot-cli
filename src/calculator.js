#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add       - Addition: returns the sum of two numbers
 *   subtract  - Subtraction: returns the difference of two numbers
 *   multiply  - Multiplication: returns the product of two numbers
 *   divide    - Division: returns the quotient of two numbers (throws on division by zero)
 *   modulo    - Modulo: returns the remainder of a divided by b
 *   power     - Power: returns base raised to the exponent
 *   squareRoot - Square Root: returns the square root of a number
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3       // => 8
 *   node calculator.js subtract 9 4  // => 5
 *   node calculator.js multiply 6 7  // => 42
 *   node calculator.js divide 10 2   // => 5
 *   node calculator.js modulo 8 3    // => 2
 *   node calculator.js power 2 3     // => 8
 *   node calculator.js squareRoot 16 // => 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero is not allowed');
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n
// Throws an error if n is negative (no real square root for negative numbers)
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative numbers is not allowed');
  return Math.sqrt(n);
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  const operations = { add, subtract, multiply, divide, modulo, power, squareRoot };

  if (!operation || !arg1) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]');
    process.exit(1);
  }

  // squareRoot only needs one argument
  if (operation !== 'squareRoot' && !arg2) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]');
    process.exit(1);
  }

  if (!operations[operation]) {
    console.error(`Unknown operation "${operation}". Supported: add, subtract, multiply, divide, modulo, power, squareRoot`);
    process.exit(1);
  }

  try {
    let result;
    
    if (operation === 'squareRoot') {
      const n = parseFloat(arg1);
      if (isNaN(n)) {
        console.error('Error: Argument must be a valid number');
        process.exit(1);
      }
      result = squareRoot(n);
    } else {
      const a = parseFloat(arg1);
      const b = parseFloat(arg2);

      if (isNaN(a) || isNaN(b)) {
        console.error('Error: Both arguments must be valid numbers');
        process.exit(1);
      }

      result = operations[operation](a, b);
    }
    
    console.log(`${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
