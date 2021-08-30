const split = (str, delim) => {
  // write code for strings.split
  const splitArr = str.split(delim);
  //console.log('the split arr is: ',splitArr);
  return splitArr;
}

const pairs = (str) => {
  // write code for strings.pairs
  let arr = [];
  let text = '';
  for (let i = 0; i < str.length; i+=2){
    text = str[i] + str[i+1];
    arr.push(text);
  }
  //console.log('two step array: ',arr)
  return arr;
}
//
// let str = 'break thing into pieces of two';
// let arr = [];
// let text = "";
// for (let i = 0; i < str.length; i+=2) {
//   text = str[i] + str[i+1];
//   //console.log(text);
//   arr.push(text);
  
// }
// console.log(arr)
//
//



const reverse = (str) => {
  // write code for strings.reverse
  const strReverse = str.split('').reverse().join('')
  return strReverse;

}

module.exports = {
  split,
  pairs,
  reverse
}