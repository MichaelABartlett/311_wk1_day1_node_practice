
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
// this is a much cleaner way to do the same thing, more acceptable in the work place
// const isEven = (num) => {
// return num % 2 == 0
//}

/**
 * this function adds up all the numbers in the array
 * @param {array} arr is the array being passed in
 * @returns the sum of all the numbers in the array
 */
const sum = (arr) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //console.log('sum of array: ',arr.reduce(reducer));
  const arrSum = arr.reduce(reducer);
  return arrSum;
}


/**
 * check to see if the sum of any two numbers in the array equal the 'sum' number
 * @param {array} arr the given arry of nhmbers used in the function
 * @param {number} sum the number that is being used to check if the sum matches
 * @returns true if any two numbers in the array equal the 'sum', returns false if no pair of numbers equals the 'sum'
 */
const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let i = 1; i < arr.length; i++){
    let nums = arr[1] + arr[i];
    if(nums == sum){
      return true;
    } else {
      return false;
    }
  }
}

// allowing the test to have access to the functions in this file
module.exports = {
  isEven,
  sum,
  comboSum
}