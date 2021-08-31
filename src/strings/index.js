/**
 * function will split a string at the 'delim' and put all into a array
 * @param {string} str the string to be used in the function
 * @param {*string} delim where the string gets split
 * @returns a array from the string that is split at the 'delim'
 */
const split = (str, delim) => {
  const splitArr = str.split(delim);
  console.log('the split arr is: ',splitArr);
  return splitArr;
}
/**
 * break a string into pairs
 * @param {string} str 
 * @returns a array from the string that is broken at every 2 index positions
 */
const pairs = (str) => {
  let arr = [];
  let text = '';
  for (let i = 0; i < str.length; i+=2){
    text = str[i] + str[i+1];
    arr.push(text);
  }
  console.log('two step array: ',arr)
  return arr;
}
/**
 * reverse a string
 * @param {string} str 
 * @returns a string that is reversed form the original, does not return a array
 */
const reverse = (str) => {
  console.log('str: ',str)
  const strReverse = str.split('').reverse().join('')
  console.log('strReverse: ', strReverse)
  return strReverse;

}

// allowing the test to have access to the functions in this file
module.exports = {
  split,
  pairs,
  reverse
}