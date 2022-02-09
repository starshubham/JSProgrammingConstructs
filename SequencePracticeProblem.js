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