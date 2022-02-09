// Destructuring assignment

const { format, parse } = require('date-and-time');

// These used to be errors in 2.0.x.
const dateformat = format(new Date(), 'MM DD YYYY');
const date1 = format(new Date(), 'MMM DD YYYY');
const dateparsing = parse('Jan 11 2022', 'MMM DD YYYY');
console.log(dateformat,dateparsing,date1)
/*

format

Formatting a Date and Time (Date -> String)
*/


/*
format(dateObj, arg[, utc])

    @param {Date} dateObj - a Date object
    @param {string|Array.<string>} arg - a format string or its compiled object
    @param {boolean} [utc] - output as UTC
    @returns {string} a formatted string
 */

const date = require('date-and-time');
const now = new Date();
const p1 = date.format(now, 'YYYY/MM/DD HH:mm:ss [UTC]',true), // => '2015/01/02 23:14:05'
p2 = date.format(now, 'ddd, MMM DD YYYY'),      // => 'Fri, Jan 02 2015'
p3 = date.format(now, 'hh:mm A [GMT]Z'),        // => '11:14 PM GMT-0800'
p4 = date.format(now, 'hh:mm A [GMT]Z', true),   // => '07:14 AM GMT+0000'
p5 = date.format(now, 'YYYY/MM/DD HH:mm:ss'); // => '2015/01/02 23:14:05'
console.log(p1);                 
console.log(p2);                  
console.log(p3);                  
console.log(p4);                  
console.log(p5);

/*

parse

    Parsing a Date and Time string (String -> Date)
    parse(dateString, arg[, utc])

    @param {string} dateString - a date string
    @param {string|Array.<string>} arg - a format string or its compiled object
    @param {boolean} [utc] - input as UTC
    @returns {Date} a constructed date


*/

const d1 = date.parse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss'),  // => Jan 2 2015 23:14:05 GMT-0800 //USA time zone
d2 = date.parse('02-01-2015', 'DD-MM-YYYY'),                    // => Jan 2 2015 00:00:00 GMT-0800
d3 = date.parse('11:14:05 PM', 'hh:mm:ss A'),                   // => Jan 1 1970 23:14:05 GMT-0800
d4 = date.parse('11:14:05 PM', 'hh:mm:ss A', true),             // => Jan 1 1970 23:14:05 GMT+0000 (Jan 1 1970 15:14:05 GMT-0800)
d5 = date.parse('23:14:05 GMT+0900', 'HH:mm:ss [GMT]Z'),        // => Jan 1 1970 23:14:05 GMT+0900 (Jan 1 1970 06:14:05 GMT-0800)
d6 = date.parse('Jam 1 2017', 'MMM D YYYY'),                     // => Invalid Date
d7 = date.parse('Feb 29 2017', 'MMM D YYYY');    

console.log(d1,d2,d3,d4,d5,d6,d7)



/* isValid(arg1[, arg2])

    @param {Object|string} arg1 - a date structure or a date string
    @param {string|Array.<string>} [arg2] - a format string or its compiled object
    @returns {boolean} whether the date string is a valid date

This function takes either exactly the same parameters with the parse() or a date structure which the preparse() returns, evaluates the validity of them.
*/

const result = date.preparse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');
console.log(date.isValid(result));   // => true



/* transform(dateString, arg1, arg2[, utc])

    @param {string} dateString - a date string
    @param {string|Array.<string>} arg1 - a format string or its compiled object
    @param {string|Array.<string>} arg2 - a transformed format string or its compiled object
    @param {boolean} [utc] - output as UTC
    @returns {string} a formatted string

This function transforms the format of a date string. The 2nd parameter, arg1, is the format string of it. Available token list is equal to the parse()'s. The 3rd parameter, arg2, is the transformed format string. Available token list is equal to the format()'s.
*/ 

const t1 =date.transform('3/8/2020', 'D/M/YYYY', 'M/D/YYYY'); //8/3/2020

const t2 = date.transform('13:05', 'HH:mm', 'hh:mm A');  //01:05 PM

console.log(t1,t2)



/*addYears(dateObj, years)

    @param {Date} dateObj - a Date object
    @param {number} years - number of years to add
    @returns {Date} a date after adding the value
*/
console.log("\nNEXT YEAR")
const next_year = date.addYears(now, 1);
console.log(next_year)




/* addMonths(dateObj, months)

    @param {Date} dateObj - a Date object
    @param {number} months - number of months to add
    @returns {Date} a date after adding the value
*/
console.log("\nNEXT MONTH")
const next_month = date.addMonths(now, 1);
console.log(next_month)


/*addDays(dateObj, days)

    @param {Date} dateObj - a Date object
    @param {number} days - number of days to add
    @returns {Date} a date after adding the value
*/
console.log("\nYESTERDAY")
const yesterday = date.addDays(now, -1);
console.log(yesterday)


/* addHours(dateObj, hours)

    @param {Date} dateObj - a Date object
    @param {number} hours - number of hours to add
    @returns {Date} a date after adding the value
*/
console.log("\n HOUR AGO")
const an_hour_ago = date.addHours(now, -1);
console.log(an_hour_ago);



/* addMinutes(dateObj, minutes)

    @param {Date} dateObj - a Date object
    @param {number} minutes - number of minutes to add
    @returns {Date} a date after adding the value
*/
console.log("\nTWO MINUTE LATER")
const two_minutes_later = date.addMinutes(now, 2);
console.log(two_minutes_later);


/* addSeconds(dateObj, seconds)

    @param {Date} dateObj - a Date object
    @param {number} seconds - number of seconds to add
    @returns {Date} a date after adding the value

*/
console.log("\nTHREE SECOND AGR")
const three_seconds_ago = date.addSeconds(now, -3);
console.log(three_seconds_ago)



/* addMilliseconds(dateObj, milliseconds)

    @param {Date} dateObj - a Date object
    @param {number} milliseconds - number of milliseconds to add
    @returns {Date} a date after adding the value
*/
console.log("\nMILI SECOND LATER")
const a_millisecond_later = date.addMilliseconds(now, 1);
console.log(a_millisecond_later)


/*subtract(date1, date2)

    @param {Date} date1 - a Date object
    @param {Date} date2 - a Date object
    @returns {Object} a result object subtracting date2 from date1
*/
console.log("\nSUBTRACT")
const today = new Date(2022, 0, 2);
const yesterdaydate= new Date(2022, 0, 1);

const s1 = date.subtract(today, yesterdaydate).toDays(),          // => 1 = today - yesterday
s2 = date.subtract(today, yesterdaydate).toHours(),        // => 24
s3 = date.subtract(today, yesterdaydate).toMinutes(),        // => 1440
s4 = date.subtract(today, yesterdaydate).toSeconds(),    // => 86400
s5 = date.subtract(today, yesterdaydate).toMilliseconds();   // => 86400000

console.log(s1,s2,s3,s4,s5)


/* isLeapYear(y)

    @param {number} y - year
    @returns {boolean} whether year is leap year
*/
console.log(date.isLeapYear(2015)) // => false
console.log(date.isLeapYear(2012)) // => true