                /* Selection Practice Problems with case statements */

/* 1. Read a single digit number and write the number in word using Case */

const prompt=require('prompt-sync')();

let Number = parseInt(prompt("Enter Single Digit Number:- "));
switch (Number) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid Input.");
}

/* UC2:- Read a Number and Display the week day (Sunday, Monday,…) */

let Day = parseInt(prompt("Enter Day Number:- "));
switch (Day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday ");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday ");
        break;
    default:
        console.log("Enter a valid input.");
        break;
}


/* UC3:- Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,… */

let Num = parseInt(prompt("Enter The Number like 1, 10, 100, 1000:- "));
switch (Num) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten")
        break;
    case 100:
        console.log("Hundred")
        break;
    case 1000:
        console.log("Thousand")
        break;
    case 10000:
        console.log("Ten Thousand")
        break;
    default:
        break;
}


/* UC4:- Write a program that takes User Inputs and does Unit Conversion of different Length units.
1. Feet to Inch
2. Feet to Meter 
3. Inch to Feet
4. Meter to Feet. 
 */

console.log("1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet.");
let num = parseInt(prompt('Enter your choice: '));
switch (num) {
    case 1:
        let Feet = parseInt(prompt("Enter value in Feet:- "));
        let FeettoInch = Feet * 12;
        console.log("Given value in Inch:- " + FeettoInch);
        break;
    case 2:
        let Feet1 = parseInt(prompt("Enter value in Feet:- "));
        let FeettoMeter = Feet1 * 0.3048;
        console.log("Given value in Meter:- " + FeettoMeter);
        break;
    case 3:
        let Inch = parseInt(prompt("Enter value in Inch:- "));
        let InchtoFeet = Inch / 12;
        console.log("Given value in Feet:- " + InchtoFeet);
        break;
    case 4:
        let Meter2 = parseInt(prompt("Enter value in Meter:- "));
        let MetertoFeet = Meter2 * 3.28;
        console.log("Given value in Feet:- " + MetertoFeet);
        break;
    default:
        break;
}
