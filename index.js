const{addDays,format} = require('date-fns');
function getDateAfterXDays(days){
    const givenDate = new Date(2020,7,22);
    const resultDate = addDays(givenDate,days);
    const formatedDate = format(resultDate, 'dd-MM-yyyy');
    return formatedDate;
}
module.exports = getDateAfterXDays;