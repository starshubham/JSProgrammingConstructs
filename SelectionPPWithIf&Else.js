                /* Selection Practice Problems with if & else */

/* UC1:- Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value */
console.log("\n******Prob No 1******");

var numArray = new Array;
for (let i = 0; i < 5; i++) 
{
    numArray[i] = Math.floor(Math.random() * 900) + 100;
    console.log(numArray[i]);
}
//Find the minimum and the maximum value.
let MaximumNumber = numArray[0];
let MinimumNumber = numArray[0];
for (let i = 0; i < 5; i++) 
{
    if (numArray[i] > MaximumNumber) 
    {
        MaximumNumber = numArray[i];
    }
    if (numArray[i] < MinimumNumber) 
    {
        MinimumNumber = numArray[i];
    }
}
console.log("Minimum Number:- " + MinimumNumber);
console.log("Maximum Number:- " + MaximumNumber);


/* UC2: Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise. */

console.log("\n******Prob No 2******");
//npm install prompt-sync
const prompt=require("prompt-sync")();  // For Taking input from user

function checkMonth()
{
    //get input from console using prompt
    var day = parseInt( prompt('Enter the day in number: '));
    var month = parseInt(prompt('Enter the month in number: '));
        switch(month)
        {
            case 3:
                if(day>=20 && day<=31)
                {
                    return true;
                }
                return false;
            case 4:
                if(day>=1 && day<=30)
                {
                    return true;
                }
                return false;
            case 5:
                if(day>=1 && day<=31)
                {
                    return true;
                }
                return false;
            case 6:
                if(day>=1 && day<=20)
                {
                    return true;
                }
                return false;
            default:
                return false;
        }
}
console.log(checkMonth()?"Valid":"Invalid");


/* UC3: Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
*/
console.log("\n******Prob No 3******");

var year = parseInt( prompt('Enter the year to check for leap year: '));


function checkLeapYear(year) 
{

    //three conditions to find out the leap year
    if ( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) )
    {
        console.log(year + ' is a leap year');
    } else 
    {
        console.log(year + ' is not a leap year');
    }
}
checkLeapYear(year);


/* UC4: Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly. */
function getCoinFlip()
{
    return Math.floor((Math.random() * 10))%2;
    //returns either 0 or 1
}
//0 is head , 1 is tail
console.log(getCoinFlip()==0?"Head":"Tail");