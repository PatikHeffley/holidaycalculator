"use strict"
var $ = function(id) {
    return document.getElementById(id);
}
var week = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday", "Sunday"]
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// Converting years to seconds and such
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
function txtDate() {
    // Converts input date to day of the month, day of the week, year, and month
    var date = new Date($("cal").value);
    $("txtdate").value = week[date.getDay() + 1] + ", " + month[date.getUTCMonth()] + " " + date.getUTCDate() + ", " + date.getFullYear();
    
    // Converting inputted date to miliseconds
    var mildate = Math.round(date.getTime() / day);
    var currentday = 0;
    // Taking miliseconds of Christmas and subtracting inputted date from it
    var christmas = new Date("December 25, " + date.getFullYear());
    christmas = Math.round(christmas.getTime() / day);
    var currentday = christmas -= mildate;
    // If inputted date is past the holiday, add a years worth of days
    if (currentday > 0) {
        $("Christmas").value = currentday;
    }
    else {
        $("Christmas").value = currentday + 365;
    }
    // Taking miliseconds of Valentines day and subtracting inputted date from it
    var valentines = new Date("February 14, " + date.getFullYear());
    valentines = Math.round(valentines.getTime() / day);
    var currentday = valentines -= mildate;
    // If inputted date is past the holiday, add a years worth of days
    if (currentday > 0) {
        $("Valentines").value = currentday;
    }
    else {
        $("Valentines").value = currentday + 365;
    }
    // Taking miliseconds of Halloween day and subtracting inputted date from it
    var halloween = new Date("October 31, " + date.getFullYear());
    halloween = Math.round(halloween.getTime() / day);
    var currentday = halloween -= mildate;
    // If inputted date is past the holiday, add a years worth of days
    if (currentday > 0) {
        $("Halloween").value = currentday;
    }
    else {
        $("Halloween").value = currentday + 365;
    }
}
window.onload = function() {
    $("cal").onchange = txtDate;
}