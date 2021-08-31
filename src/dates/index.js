// import moment here; use this package in each function
const moment = require("moment");


/**
 * 
 * @returns the day of the week
 */
const today = () => {
  const day = moment().format('dddd');
  //console.log('the name of the day: ', day);
  return day;

}
/**
 * 
 * @returns the month(3 digits only) space numeric date(2 digits) "," the year(4 digits)
 * all the parameters are on the Moment.js.com under the docs/display
 */
const calendar = () => {
  // write code for dates.calendar
  const cal = moment().format('MMM DD, YYYY');
  //console.log('calender:' ,cal);
  return cal;

}
/**
 * 
 * @returns  the hour(2 digits) minutes(2 digits)seconds(2 digits) then AM or PM capitilized
 * all the parameters are on the Moment.js.com under the docs/display
 */
const currentTime = () => {
  // write code for dates.currentTime
 const date = moment().format('HH:mm:ss A');
 console.log('current time: ',date);
return date;
}



// allowing the test to have access to the functions in this file
module.exports = {
  today,
  calendar,
  currentTime
}