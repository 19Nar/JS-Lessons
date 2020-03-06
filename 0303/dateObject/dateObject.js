// Date Object

/*Date objects are created with the new Date() constructor.
There are 4 ways to create a new date object:

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
*/

new Date();   //Date objects are static. The computer time is ticking, but date objects are not.

var BelgiumTime = new Date();

console.log(BelgiumTime.getFullYear());
console.log(BelgiumTime.getMonth());  //javascript counts the months from 0, thus from 0 to 11
console.log(BelgiumTime.toLocaleString());
console.log(BelgiumTime.toUTCString());  //converts a date to a UTC string (a date display standard).
console.log(BelgiumTime.toDateString());  //converts a date to a more readable format.
console.log(BelgiumTime.toString());   //converts a date to a string.

var UnixTimeStampFormat //142278545829
var time = new Date(UnixTimeStampFormat *1000);
console.log(new Date(UnixTimeStampFormat *1000).toLocaleString("nl-be"));


var getHour = BelgiumTime.getHours();
var getMin = BelgiumTime.getMinutes();
var getSec = BelgiumTime.getSeconds();

var myTime = getHour + "," + getMin + "," + getSec;
console.log(myTime);

var myDays = ["Zondag","Maandag","Dinsdag","Zondag","Woensdag","Donderdag","Zaterdag"];
console.log(myDays[BelgiumTime.getDay()]);

/* Exercises
a) Use the correct Date method to extract the year (four digits) out of a date object:      TO MENTION THE DATE IN GENERAL IS WITH "GET"
var d = new Date();
year = d.getFullYear();

b) Use the correct Date method to get the month (0-11) out of a date object:
var d = new Date();
month = d.getMonth();

c) Use the correct Date method to set the year of a date object to 2020:                  TO SET THE DATE INTO THE PARTICULAR DATE WE SHALL USE "SET"
var d = new Date();
d.setFullYear(2020);


*/