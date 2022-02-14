/* 1. Read a single digit number and write the number in word */
const prompt=require('prompt-sync')();
let num=prompt('Enter Single Digit Number(0 To 9):- ');
if(num==1)
console.log("One");
else if(num==2)
console.log("Two");
else if(num==3)
console.log("Three");
else if(num==4)
console.log("Four");
else if(num==5)
console.log("Five");
else if(num==6)
console.log("Six");
else if(num==7)
console.log("Seven");
else if(num==8)
console.log("Eight");
else if(num==9)
console.log("Nine");
else if(num==0)
console.log("Zero");
else
console.log("Invalid Number.");


/* 2. Read a Number and Display the week day (Sunday, Monday,…) */
Day = prompt('Enter the Days Number: ');
if(num==1)
console.log("Monday");
else if(Day==2)
console.log("Tuesday");
else if(Day==3)
console.log("Wednesday");
else if(Day==4)
console.log("Thursday");
else if(Day==5)
console.log("Friday");
else if(Day==6)
console.log("Saturday");
else if(Day==7)
console.log("Sunday");


/* 3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…  */
Number = prompt('Enter the Number like 1, 10, 100, 1000:- '); //Take input
if(Number==1) //check input 
console.log("unit");
else if(Number==10)
console.log("Ten");
else if(Number==100)
console.log("Hundred");
else if(Number==1000)
console.log("Thousand");
else if(Number==10000)
console.log("Ten Thousand");
else
console.log("You Enter Wrong Number"+Number);


/* 4. Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
1. a + b * c            3. c + a / b
2. a % b + c            4. a * b + c
*/

const a = parseInt(prompt('Enter the number 1: '));
const b = parseInt(prompt('Enter the number 2: '));
const c = parseInt(prompt('Enter the number 3: '));

const num1 = a+(b*c);
const num2 = a%b+c;
const num3 = c + (a/b);
const num4 = (a*b) +c;
console.log(num1+','+ num2+','+num3+','+num4);
let max,min;
if(num1>num2 && num1>num3 && num1>num4)
    max = num1;
else if(num2>num1 && num2>num3 && num2>num4)
    max = num2;
else if(num3>num1 && num3>num2 && num3>num4)
    max=num3;
else    
    max=num4;

if(num1<num2 && num1<num3 && num1<num4)
    min = num1;
else if(num2<num1 && num2<num3 && num2<num4)
    min = num2;
else if(num3<num1 && num3<num2 && num3<num4)
    min=num3;
else    
    min=num4;

console.log('Maximum number is: '+max +'\nMinimum number is: '+min );