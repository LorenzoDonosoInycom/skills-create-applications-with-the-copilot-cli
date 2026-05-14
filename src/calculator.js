#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition: returns the sum of two numbers
 *   subtract - Subtraction: returns the difference of two numbers
 *   multiply - Multiplication: returns the product of two numbers
 *   divide   - Division: returns the quotient of two numbers (throws on division by zero)
 *   modulo   - Modulo: returns the remainder of a divided by b (throws on division by zero)
 *   power    - Exponentiation: returns a raised to the power of b
 *   sqrt     - Square root: returns the square root of a (throws on negative numbers)
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3       // => 8
 *   node calculator.js subtract 9 4  // => 5
 *   node calculator.js multiply 6 7  // => 42
 *   node calculator.js divide 10 2   // => 5
 *   node calculator.js modulo 10 3   // => 1
 *   node calculator.js power 2 8     // => 256
 *   node calculator.js sqrt 16       // => 4
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
// Throws an error if b is zero to prevent division by zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a % b;
}

// Power: returns a raised to the power of b
function power(a, b) {
  return Math.pow(a, b);
}

// Square root: returns the square root of a
// Throws an error if a is negative
function sqrt(a) {
  if (a < 0) throw new Error('Square root of a negative number is not allowed');
  return Math.sqrt(a);
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };

// CLI entry point
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  // sqrt only needs one argument; all others need two
  const unaryOps = ['sqrt'];
  const operations = { add, subtract, multiply, divide, modulo, power, sqrt };

  if (!operation || !arg1) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <num1> [num2]');
    process.exit(1);
  }

  if (!operations[operation]) {
    console.error(`Unknown operation "${operation}". Supported: add, subtract, multiply, divide, modulo, power, sqrt`);
    process.exit(1);
  }

  if (!unaryOps.includes(operation) && !arg2) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide|modulo|power> <num1> <num2>');
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = arg2 !== undefined ? parseFloat(arg2) : undefined;

  if (isNaN(a) || (b !== undefined && isNaN(b))) {
    console.error('Error: Arguments must be valid numbers');
    process.exit(1);
  }

  try {
    const result = unaryOps.includes(operation) ? operations[operation](a) : operations[operation](a, b);
    console.log(`${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
