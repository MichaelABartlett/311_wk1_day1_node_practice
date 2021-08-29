
/**
 * checks if the number is even or add
 * @param {number} num - the number we are checking
 * @returns true if the number is even, or false if the number is odd
 */
const isEven = (num) => {
  // write code for numbers.isEven
  if(num % 2 == 0){
    return true;
  } else { // could have left off the else{} and it still would have worked
    return false
  }
}

// or

// const isEven = (num) => {
// return num % 2 == 0
}

const sum = (arr) => {
  // write code for numbers.sum

}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

}

module.exports = {
  isEven,
  sum,
  comboSum
}