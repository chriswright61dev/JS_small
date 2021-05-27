// The Date object in JavaScript stores the date and time.
// Has methods for formatting and managing that data.
// Default new Date instance without arguments creates object of current date and time. This will be created according to the current computer’s system settings.

const now = new Date();
console.log(now);
// 2020-02-18T16:05:04.355Z

// Displays a date string containing
// 2020 02      18  T               16      05      04.355          Z
// Year Month   Day Day of the Week Hour    Minute  Second

// This is not true
// Displays a date string containing
// Day of the Week 	Month 	Day 	Year 	Hour 	Minute 	Second 	Timezone
// Wed 	            Oct 	18 	    2017 	12 	    41 	    34 	    GMT+0000 (UTC)

// The date and time is printed for people
// In JS, date is based on a timestamp derived from Unix time,
// number of milliseconds since January 1st, 1970.
// Get the timestamp with the getTime() method.

// // Get the current timestamp
let timeStampNow = now.getTime();
console.log(timeStampNow);

// //Epoch time, also referred to as zero time, represented by
// the date string 01 January, 1970 00:00:00 Universal Time (UTC),
// he 0 timestamp

// Test  in the browser by creating a new variable
// and assigning to it a new Date instance based on a timestamp of 0.

// epoch.js
// Assign the timestamp 0 to a new variable
const epochTime = new Date(0);
console.log(epochTime);

// Output
// 1970-01-01T00:00:00.000Z
// not
// 01 January, 1970 00:00:00 Universal Time (UTC)

// In total, there are four formats by which you can create a new Date in JavaScript.
// In addition to the current time default and timestamp,
// you can also use a date string, or specify particular dates and times.

// Date Creation 	        Output
// new Date() 	`           Current date and time
// new Date(timestamp) 	    Creates date based on milliseconds since Epoch time
// new Date(date string) 	Creates date based on date string
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
//                          Creates date based on specified date and time

// To demonstrate the different ways to refer to a specific date,
// we’ll create new Date objects that will represent July 4th, 1776 at 12:30pm GMT
// in three different ways.
// usa.js

// // Timestamp method
let date1 = new Date(-6106015800000);

// // Date string method
let date2 = new Date("July 4 1776 12:30");

// // Date and time method
let date3 = new Date(1776, 6, 4, 12, 30, 0, 0);
console.log("1776");
console.log(date1);
console.log(date2);
console.log(date3);
// The three examples above all create a date containing the same information.
// No they don't
// 1776-07-04T12:30:00.000Z
// 1776-07-04T12:31:15.000Z
// 1776-07-04T12:31:15.000Z

// You’ll notice the timestamp method has a negative number;
// any date prior to Epoch time will be represented as a negative number.

// In the date and time method, our seconds and milliseconds are set to 0.
// If any number is missing from the Date creation, it will default to 0.
// However, the order cannot be changed,
// if you decide to leave off a number.

// You may also notice that the month of July is represented by 6, not the usual 7.
// This is because the date and time numbers start from 0,
// as most counting in programming does.
console.log(date1.getMonth());

// Retrieving the Date with get
//we can access all the components of the date with various built-in methods.
//The methods will return each part of the date relative to the local timezone.
//Each of these methods starts with get, and will return the relative number.

//Below is a detailed table of the get methods of the Date object.
// Date/Time 	            Method 	            Range 	Example
// Year 	                getFullYear() 	    YYYY 	1970
// Month 	                getMonth() 	        0-11 	0 = January
// Day (of the month) 	    getDate() 	        1-31 	1 = 1st of the month
// Day (of the week) 	    getDay() 	        0-6 	0 = Sunday
// Hour 	                getHours()  	    0-23 	0 = midnight
// Minute 	                getMinutes() 	    0-59
// Second 	                getSeconds() 	    0-59
// Millisecond 	            getMilliseconds() 	0-999
// Timestamp 	            getTime() 	        Milliseconds since Epoch time

// Let’s make a new date, based on July 31, 1980, and assign it to a variable.

// harryPotter.js
//  Initialize a new birthday instance
const birthday = new Date(1980, 6, 31);

// Now we can use all our methods to get each date component, from year to millisecond.
// getDateComponents.js

birthday.getFullYear(); // 1980
birthday.getMonth(); // 6
birthday.getDate(); // 31
birthday.getDay(); // 4
birthday.getHours(); // 0
birthday.getMinutes(); // 0
birthday.getSeconds(); // 0
birthday.getMilliseconds(); // 0
birthday.getTime(); // 333849600000 (for GMT)

// Sometimes it may be necessary to extract only part of a date,
// and the built-in get methods are the tool you will use to achieve this.

// For an example of this, we can test the current date
//against the day and month of October 3rd to see whether it’s October 3rd or not.
// oct3.js

// Get today's date
const today = new Date();

// Compare today with October 3rd
if (today.getDate() === 3 && today.getMonth() === 9) {
  console.log("It's October 3rd.");
} else {
  console.log("It's not October 3rd.");
}

// The built-in Date methods that begin with get
// allow us to access date components that return the number associated with
// what we are retrieving from the instantiated object.

// Modifying the Date with set

// For all the get methods that we learned about above,
// there is a corresponding set method.
// Where get is used to retrieve a specific component from a date,
// set is used to modify components of a date.

// Below is a detailed chart of the set methods of the Date object.
// Date/Time 	        Method 	            Range 	Example
// Year 	            setFullYear()       YYYY 	1970
// Month 	            setMonth() 	        0-11 	0 = January
// Day (of the month) 	setDate() 	        1-31 	1 = 1st of the month
// Day (of the week) 	setDay() 	        0-6 	0 = Sunday
// Hour 	            setHours() 	        0-23 	0 = midnight
// Minute 	            setMinutes() 	    0-59
// Second 	            setSeconds() 	    0-59
// Millisecond 	        setMilliseconds() 	0-999
// Timestamp 	        setTime() 	        Milliseconds since Epoch time

// We can use these set methods to modify one, more, or all of the components of a date. For example, we can change the year of our birthday variable from above to be 1997 instead of 1980.
// harryPotter.js

// // Change year of birthday date
birthday.setFullYear(1997);

// birthday;

// Output
// Thu Jul 31 1997 00:00:00 GMT+0000 (UTC)

// We see in the example above that when we call the birthday variable
//we receive the new year as part of the output.

// The built-in methods beginning with set let us modify different parts of a Date object.
// Date Methods with UTC

// The get methods discussed above retrieve the date components
// based on the user’s local timezone settings.
// For increased control over the dates and times,
//you can use the getUTC methods, which are exactly the same as the get methods,
// except they calculate the time based on the UTC (Coordinated Universal Time) standard. Below is a table of the UTC methods for the JavaScript Date object.

// Date/Time 	        Method 	                Range 	Example
// Year 	            getUTCFullYear() 	    YYYY 	1970
// Month 	            getUTCMonth()   	    0-11 	0 = January
// Day (of the month) 	getUTCDate() 	        1-31 	1 = 1st of the month
// Day (of the week) 	getUTCDay() 	        0-6 	0 = Sunday
// Hour 	            getUTCHours() 	        0-23 	0 = midnight
// Minute 	            getUTCMinutes() 	    0-59
// Second 	            getUTCSeconds() 	    0-59
// Millisecond 	        getUTCMilliseconds() 	0-999

// To test the difference between local and UTC get methods,
// we can run the following code.
// UTC.js

// // Assign current time to a variable
const now2 = new Date();

// // Print local and UTC timezones
console.log(now2.getHours());
console.log(now2.getUTCHours());

// Running this code will print out the current hour,
// and the hour of the UTC timezone.
// If you are currently in the UTC timezone
// the numbers that are output from running the program above will be the same.

// UTC is useful in that it provides an international time standard reference
// and can therefore keep your code consistent across timezones if that is applicable to what you are developing.
