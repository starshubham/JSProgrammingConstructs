                /* Functions Practice Problems */

/* 1. Help user find degF or degC based on their Conversion Selection. Use Case Statement and ensure that 
the inputs are within the Freezing Point (0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9
*/
const prompt=require('prompt-sync')();

console.log("\n******Problem 1******");
let value1 = parseInt(prompt("Enter value in degC: "));
function celciusToFahrenheit(degC) {
    if (degC >= 0 && degC <= 100) {
        let degF = (degC * 9 / 5) + 32;
        console.log(value1 + " degC = " + degF + " degF");
    }
    else {
        console.log("Incorrect celcius value");
    }
}
celciusToFahrenheit(value1);

let value2 = parseInt(prompt("Enter value in degF: "));
function fahrenheitToCelcius(degF) {
    if (degF >= 32 && degF <= 212) {
        let degC = (degF - 32) * (5 / 9);
        console.log(value2 + " degF = " + degC + " degC");
    }
    else {
        console.log("Incorrect fahrenheit value");
    }
}
fahrenheitToCelcius(value2);


/* 2. Write a function to check if the two numbers are Palindromes */
console.log("\n******Problem 2******");
console.log("Check two numbers are palindrome or not.");
let num1 = parseInt(prompt("Enter 1st number: "));
let num2 = parseInt(prompt("Enter 2nd number: "));

function palindromeCheck(num1, num2) {
    let palindromeNum1 = 0;
    while (num1 > 0) {
        let rem = num1 % 10;
        palindromeNum1 = palindromeNum1 * 10 + rem;
        num1 = Math.floor(num1 / 10);
    }
    if (palindromeNum1 == num2)
        return true;
    else
        return false;
}

let isPalindrome = palindromeCheck(num1, num2);
console.log("Is number2 a palindrome of number1:- " + isPalindrome);


/* 3. Take a number from user and check if the number is a Prime then show that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime
*/
console.log("\n******Problem 3******");
console.log("Check Given number is prime or not. If it is prime then check its palidrome is also prime or not.");
let number = parseInt(prompt("Enter a number: "));
function isPrime(num)
{
    for(let i=2;i<num/2;i++){
        if(num%i===0) return false;
    }  
    return true;
}
function isPalindrom(num)
{
    const isNegative=num<0?true:false;
    if(isNegative)
    {
        return false;
    }
    const Check=num;
    let reversed=0;
    while(num>0)
    {
        reversed=(reversed*10)+(num%10);
        num=parseInt(num/10);
    }
    return reversed==Check;
}
var checkPrime = isPrime(number);
var checkPalindrome=isPalindrom(number);
if(checkPrime==true && checkPalindrome==true)
{
    console.log("Given number is Prime and its palindrome is also a prime number.");
}
else if(checkPrime==true && checkPalindrome==false)
{
    console.log("Given number is Prime but its palindrome is not a prime number.");
}
else
{
    console.log("Given number is not Prime number.");
}