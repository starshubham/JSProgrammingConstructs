/* Repetition Practice Problems with for loop*/

const prompt=require('prompt-sync')();

console.log("1. Powers of 2\n2. nth Harmonic number\n3. Check Prime Number\n4. Find Prime Numbers in given range" +
"\n5. Find Factorial of a number\n6. Compute Factors of a number N using prime factorization\n");
var Choice = parseInt(prompt("Enter your choice: "));
switch (Choice) 
{
    case 1:
        /* UC1:- Write a program that takes a command-line argument n and prints a table of the powers 
        of 2 that are less than or equal to 2^n.*/
        try 
        {
            var num = parseInt(prompt("Enter a number:- ")); //Take input
            for (i = 1; i <= num; i++) {
                console.log(Math.pow(2, i)); // using pow function
            }
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;

    case 2:
        /* UC2:- Write a program that takes a command-line argument n and prints the nth harmonic number. 
        Harmonic Number is of the form
        Hn = (1/1 + 1/2 + 1/3 + 1/4 + .... + 1/n) */
        try 
        {
            var number = parseInt(prompt("Enter a number:- ")); //Take input
            let harmonicNumber = 0;
            for (i = 1; i <= number; i++) 
            {
                harmonicNumber += 1 / i;
            }
            console.log(number + "th Harmonic number= " + harmonicNumber);
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;
    case 3:
        /* UC3:- Write a program that takes a input and determines if the number is a prime.*/
        try 
        {
            var number = parseInt(prompt("Enter a number:- ")); //Take input

            let flag = true;
            if (number <= 1)
                flag = false;
            else 
            {
                for (let i = 2; i < number; i++) 
                {
                    if (number % i == 0)
                        flag = false;
                }
            }
            if (flag == false)
                console.log("It is not a prime number");
            if (flag == true)
                console.log("It is a prime number");
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;
    case 4:
        /* UC4:- Extend the program to take a range of number as input and output the Prime Numbers in that range.*/
        try 
        {
            const StartingNumber = parseInt(prompt('Enter lower number: '));
            const EndingNumber = parseInt(prompt('Enter higher number: '));
            console.log('The prime numbers between ' + StartingNumber + ' and ' + EndingNumber + ' are:');
            for (let i = StartingNumber; i <= EndingNumber; i++) {
                let flag = 0;
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        flag = 1;
                        break;
                    }
                }
                if (i > 1 && flag == 0) {
                    console.log(i);
                }
            }
        }
        catch (ex) 
        {
            console.log(ex);
        }
        break;
    case 5:
        /* UC5:- Write a program that computes a factorial of a number taken as input. 
        5 Factorial – 5! = 1 * 2 * 3 * 4 * 5 */
        try 
        {
            var number = parseInt(prompt("Enter a positive number:- ")); //Take input
            fact = 1
            if (number == 0)
                fact = 1;
            for (let i = 2; i <= number; i++) 
            {
                fact = fact * i;
            }
            console.log(number + "!=" + fact);
        }
        catch (ex) {
            console.log(ex);
        }

        break;
    case 6:
        /*UC6:- Write a program to compute Factors of a number N using prime factorization method.
                Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
                O/P -> Print the prime factors of number N. */
        try 
        {
            function primeFactorize(number) 
            {
                let factors = [];
                for (k = 1; k <= number / 2; k++) 
                {
                    if (number % k === 0) {
                        factors.push(k);
                    }
                }
                for (j = 0; j < factors.length; j++) 
                {
                    console.log(factors[j]);
                }
            }
            var number = parseInt(prompt("Enter a positive number:- ")); //Take input
            primeFactorize(number);
        } 
        catch (ex) 
        {
            console.log(ex);
        }
        break;

    default:
        break;
}
