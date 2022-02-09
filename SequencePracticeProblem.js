// ### Sequence Practice Problems ###

/* 1. Use REPL – Random Function Math.floor(Math.random() * 10); to get Single Digit. */
let Random_number = Math.floor(Math.random() * 10); 
// let allows you to declare variables that are limited to the scope of a block statement
console.log("Random Number is: " + Random_number); // Print Random number


/* UC2:- Use Random to get Dice Number between 1 to 6 */
let Dice_Number = Math.floor(Math.random() * 6)+1;  //Dice Number between 1 to 6
console.log("Dice Number is: " + Dice_Number ); //print Dice Number 


/* UC3:- Add two Random Dice Number and Print the Result */
let Dice_Number1 = Math.floor(Math.random()*6)+1;  //Dice Number between 1 to 6
console.log(Dice_Number1 ); //print Dice Number1 
let Dice_Number2=Math.floor(Math.random()*6)+1;  //Dice Number between 1 to 6
console.log(Dice_Number2 ); //print Dice Number2 
console.log("Sum of Two Random Dice Number:- " + (Dice_Number1+Dice_Number2)); 


/* UC4:- Use Script & Debug
         – Write a program that reads 5 Random 2 Digit values, then find their sum and the average.
*/

let twoDigNum;
let sum=0;
for (let i = 0; i < 5; i++)
{
    twoDigNum = Math.floor(Math.random() * 90) + 10;
    console.log('Number = ' + twoDigNum);
    //addinng random digits
    sum +=twoDigNum;   
}  
// finding sum and average 
console.log('Sum of 5 two digits number is = ' + sum);
console.log('Average of the sum of the 5 two digits number is = ' + sum/5);


/* UC5:- Use Script & Debug – Unit Conversion .
         a. 1ft = 12 in then 42 in = ? ft 
         b. Rectangular Plot of 60 feet x 40 feet in meters
         c. Calculate area of 25 such plots in acres
*/
//a. Conversion from inch to feet.
let inchs = 42;
let ft = inchs / 12;
console.log("42 in = " + ft + " feet");

//b. Rectangular Plot of 60 feet x 40 feet in meters.
//convert feet to meter
let len = 60;  // 1 feet = 0.3048 metre
let breadth = 40  // 1 sq feet = 0.3048*0.3048 = 0.0929 sq metre
//formula for rectangle area
let area = (len*breadth);
let areas = (area * 0.0929).toFixed(2);
console.log('area in sq metres = ' + areas + ' sq-m');

//calculate for 25 plots
let totalArea = areas*25;
console.log('Total Area of 25 such plots in sq-m = ' + totalArea + " sq-m" );

//c. Calculating area of 25 such plots.
let areaInAcre = (totalArea / 4047).toFixed(2);  // 1 acre = 4047 sq-m
console.log('Total Area of 25 such plots in acre = ' + areaInAcre +' acres');