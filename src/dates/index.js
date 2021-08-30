// import moment here; use this package in each function
//import "moment"


const moment = require("moment");



const today = () => {
  // write code for dates.today
  const day = moment().format('dddd');
  console.log('the name of the day: ', day);
  return day;

}

const calendar = () => {
  // write code for dates.calendar
  const date = moment().format('LL');
  //console.log(date);
  return date;

}

const currentTime = () => {
  // write code for dates.currentTime
 const date = moment().format('LTS');
 //console.log(date);
return date;
}




module.exports = {
  today,
  calendar,
  currentTime
}