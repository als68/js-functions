/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
var numberToString = function(number) {
  return number.toString();
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(n) {
  return n + 1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(n) {
  return n - 1;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x, y) {
  return x + y;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x, y) {
  return x - y;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x, y) {
  return x * y;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x, y) {
  return x / y;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x) {
  return (x * x);
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(operation, x, y) {
  switch (operation) {
    case "add":
      console.log(x + " + " + y + " = " + (x+y));
      return x + y;
    case "subtract":
      console.log(x + " - " + y + " = " + (x-y));
      return x - y;
    case "multiply":
      console.log(x + " * " + y + " = " + (x*y));
      return x * y;
    case "divide":
      console.log(x + " / " + y + " = " + (x/y));
      return x / y;
    default:
      break;
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(a, b) {
  return a > b;
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
 function isLessThan(a, b) {
  return a < b;
 }


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function areEqual(a, b) {
  return a === b;
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x, y) {
  if (x > y) {
    return y;
  }
  else {
    return x;
  }
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x, y) {
    if (x > y) {
    return x;
  }
  else {
    return y;
  }
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n) {
  if (n % 2 === 0) {
    return isEven;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n) {
  if (n % 2 != 0) {
    return isOdd;
  }
}


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score, total) {
  if ((score / total) <= 1 && (score/total) >= .9) {
    return "A";
  }
  if ((score / total) < .9 && (score/total) >= .8) {
    return "B";
  }
  if ((score / total) < .8 && (score/total) >= .7) {
    return "C";
  }
  if ((score / total) < .7 && (score/total) >= .6) {
    return "D";
  }
  if ((score / total) < .6 && (score/total) >= .5) {
    return "F";
  }
}


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(restaurant) {
  if (restaurant.reviews === undefined){
    restaurant.reviews = 1;
  }
  else {
    restaurant.reviews++;
  };
  return restaurant;
}
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1, word2) {
  return word1 + " " + word2;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(radius) {
  var circle = {
    circumference: 2 * Math.PI * radius,
    area: Math.PI * (radius * radius)
  };
  return circle;
}