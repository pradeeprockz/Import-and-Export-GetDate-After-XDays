let addDays = require('date-fns/addDays');
function getDateAfterXDays(days){
   let givenDate = addDays(new Date(2020,7,22),days);
   console.log(`${givenDate.getDate()} - ${givenDate.getMonth() -1} ${givenDate.getFullYear()}`);
}
getDateAfterXDays(2);