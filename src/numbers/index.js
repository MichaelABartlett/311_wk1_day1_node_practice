
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
//}

const sum = (arr) => {
  // write code for numbers.sum
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //console.log('sum of array: ',arr.reduce(reducer));
  const arrSum = arr.reduce(reducer);
  return arrSum;
}

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

module.exports = {
  isEven,
  sum,
  comboSum
}