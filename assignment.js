// ASSIGNMENT 1

//IF ELSE STATEMENT

/*

// Age Eligibility Checker: Determine if a person is eligible to vote based on their age.


let displayAge = window.prompt(`Check Voting Age Eligibility`)
displayAge = Number(displayAge)

if(displayAge >= 18){
    console.log(`You are eligible to vote`)
}else{
    console.log(`Sorry you are not eligible to vote`)
}

*/

/*

// Even or Odd Number Identifier: Check if a given number is even or odd and display a message.

let check = window.prompt(`Enter a number`)
check = Number(check)

if(check % 2 === 0){
    console.log(`This is a even numbers`)
}else{
    console.log(`This is a odd number`)
}

*/

/*

// Vowel or Consonant Classifier: Determine if a given letter is a vowel or a consonant.

let determine = window.prompt(`Enter a letter`)
let confirm = determine.toLowerCase()

if(confirm === `a` || confirm === `e` || confirm === `i` || confirm === `o` || confirm === `u`){
    console.log(`${determine} are vowels`)
}else{
    console.log(`${determine} is a consonant`)
}

*/


/*

// Largest Number Finder: Compare two numbers and return the larger one.

let finderA = window.prompt(`Enter the first number`)
finderA = Number(finderA)

let finderB= window.prompt(`Enter the second number`)
finderB = Number(finderB)

if(finderA > finderB){

    console.log(`${finderA}`)

}else{
    console.log(`${finderB}`)
}
*/

/*
// Simple Calculator: Create a calculator that can perform basic arithmetic operations (+, -, *, /).


let num1 = window.prompt(`Enter the first number`)
num1 = Number(num1)

let operator = window.prompt(`Enter the operator (+, -, *, /)`)

let num2 = window.prompt(`Enter the second number`)
num2 = Number(num2)

let result;

if(operator === "+"){
    result = num1 + num2;
    console.log(result)
}else if (operator === "-") {
    result = num1 - num2;
    console.log(result)
  } else if (operator === "*") {
    result = num1 * num2;
    console.log(result)
  } else if (operator === "/") {
    if (num2 === 0) {
      console.log("Error: Division by zero.");
    } else {
      result = num1 / num2;
      console.log(result)
    }
  }else {
    console.log("Invalid operator.");
  }

*/


/*
// Switch Statement:

// Day of the Week Printer: Print the name of the day for a given number (1-7).

let monday = 1
let tuesday = 2
let wednesday = 3
let thursday = 4
let friday = 5
let saturday = 6
let sunday = 7

let checkNameOfTheDay = window.prompt(`Input a number between 1-7 to print a day`)
checkNameOfTheDay = Number(checkNameOfTheDay)


switch(true){

    case checkNameOfTheDay === monday:
        console.log(`Monday`)
        break
    case checkNameOfTheDay === tuesday:
        console.log(`Tuesday`)
        break
    case checkNameOfTheDay === wednesday:
        console.log(`Wednesday`)
        break
    case checkNameOfTheDay === thursday:
        console.log(`Thursday`)
        break
    case checkNameOfTheDay === friday:
        console.log(`Friday`)
        break
    case checkNameOfTheDay === saturday:
        console.log(`Saturday`)
        break
    case checkNameOfTheDay === sunday:
        console.log(`Sunday`)
        break
    default:
        console.log(`This number is not existing`)
}



// Grade Evaluator: Assign a letter grade (A,B,C,D,orF) based on a numerical grade.


let grade = window.prompt(`Enter a number`)
grade = Number(grade)

switch(true){
    case (grade === 0 && grade <= 49):
        console.log(`F`)
        break
    case (grade > 49 && grade <= 59):
        console.log(`E`)
        break
    case (grade > 59 && grade <= 69):
        console.log(`D`)
        break
    case (grade > 69 && grade <= 79):
        console.log(`C`)
        break
    case (grade > 79 && grade <= 89):
        console.log(`B`)
        break
    case (grade > 89 && grade <= 100):
        console.log(`A`)
        break
    default:
        console.log(`F`)
}



// Rock-Paper-Scissors Game: Determine the winner based on player choices.

let firstChoice = `rock`
let secondChoice = `paper`
let thirdChoice = `scissors`

let choice = window.prompt(`Enter your choice (rock, paper, scissors)`)
let playerChoice = choice.toLowerCase()

switch(true){

    case (playerChoice === firstChoice):
        console.log(`Sorry, you lose`)
        break
    case (playerChoice === secondChoice):
        console.log(`Sorry, you lose`)
        break
    case (playerChoice === thirdChoice):
        console.log(`You are the winner`)
        break
    default :
        console.log(`Input either rock, paper or scissors`)
}



// Month Name Displayer: Print the name of a month for a given number (1-12).

let january = 1
let february = 2
let march = 3
let april = 4
let may = 5
let june = 6
let july = 7
let august = 8
let september = 9
let october = 10
let november = 11
let december = 12

let month = window.prompt(`Enter a number`)
month = Number(month)

switch(true){
    case (month === 1):
        console.log(`January`)
        break
    case (month === 2):
        console.log(`February`)
        break
    case (month === 3):
        console.log(`March`)
        break
    case (month === 4):
        console.log(`April`)
        break
    case (month === 5):
        console.log(`May`)
        break
    case (month === 6):
        console.log(`June`)
        break
    case (month === 7):
        console.log(`July`)
        break
    case (month === 8):
        console.log(`August`)
        break
    case (month === 9):
        console.log(`September`)
        break
    case (month === 10):
        console.log(`October`)
        break
    case (month === 11):
        console.log(`November`)
        break
    case (month === 12):
        console.log(`December`)
        break
    default:
        console.log(`Please enter a number between (1 - 12)`)


}


// Simple Menu: Create a menu with a few options and execute different actions based on the user's choice.

let firstMenu = `garri`
let secondMenu = `beans`
let thirdMenu = `salad`

let order = window.prompt(`choose either: garri, beans, salad`)


switch(true){
    case(order === firstMenu):
    console.log(`You choose firstMenu`)
    break
    case(order === secondMenu):
    console.log(`You choose secondMenu`)
    break
    case(order === thirdMenu):
    console.log(`You choose thirdMenu`)
    break
    default:
        console.log(`choose either: garri, beans, salad`)

}



// For Loops

// Number Summation: Calculate the sum of all numbers from 1 to a given number.

for(let i = 1; i < 15; i++){

    console.log(`SUM OF NUMBER FOR ${i}`)

    for(x = 1; x < 20; x++){
        
        let sum = `${i} + ${x} = ${i + x}`

        console.log(sum)

    }

}



// Count down Timer: Print a count down from a given number to 1.

const countNumber = 20

for(let i = countNumber; i >= 1; i--){

    let countDown = `count down from ${i}`

    console.log(countDown)



}



// Multiplication Table Generator: Print a multiplication table for a given number.

for(let i = 1; i < 10; i++){

    console.log(`MULTIPLICATION TABLE FOR ${i}`)

        for(x = 1; x < 12; x++){

            let multiply = `${i} X ${x} = ${i * x}`
            console.log(multiply)
        }

}



//  Array Element Printer: Print each element of an array.

let print = [`Mother`, `Father`, `Daughter`, `Son`]


for(let i = 0; i < print.length; i++){

     let savePrint = print[i]
     console.log(savePrint)

}



// String Repeater: Repeat a string a specified number of times.


// String to repeat
const showString = `Chirley`

// Number of time to repeat 

const repetition = 3

for(let i = 0; i < repetition; i++){
    let repeat = showString
    console.log(repeat)
}



// Greeter Function: Take a person's name as input and greet them with a personalized message.

function displayName(){
    let bigGame = `chirley`
    console.log(`Hello, You are so special in my life and i am welcoming you home ${bigGame}`)
}

displayName()



// Area Calculator: Calculate the area of a rectangle, triangle, or circle.


// Area Of Rectangle

 let length = window.prompt(`Enter the length`)
 length = Number(length)

 let  width = window.prompt(`Enter the width`)
 width = Number(width)

function letCalculateAreaOfRectangle(){
    let answer = length * width
    console.log(answer)

}

letCalculateAreaOfRectangle()

// With Parameter
// function rectangleArea(length, width) {
//     let store = length * width
//    console.log(store)
//   }

//   rectangleArea(3,3)




// Area of Triangle

let base = window.prompt(`Enter the base`)
base = Number(base)

let height = window.prompt(`Enter the height`)
height = Number(height)

function letCalculateAreaOfTriangle(){
    let result = 0.5 * (base * height)
    console.log(result)
}

letCalculateAreaOfTriangle()



// Area of circle

let radius = window.prompt(`Enter the radius`)
radius = Number(radius)

let thePi = 3.14159

function calculateTheAreaOfCirle(){
    let raisePowerOfR = Math.pow(radius, 2)

    let solve = thePi * raisePowerOfR
    console.log(solve)
}

calculateTheAreaOfCirle()



// Palindrome Checker: Determine if a given word or phrase is a palindrome (reads the same backward as forward).

const word = window.prompt("Enter a word or phrase: ")

const cleanWord = word.toLowerCase()

function checkIfPalindrome(){

    const reversedWord = cleanWord.split("").reverse()

    console.log(reversedWord)

    
}

checkIfPalindrome()




// Number Reverser: Reverse the digits of a given number.


const numbers = [
    20,
    30,
    40,
    50,
    60,
    70
]

numbers.reverse()
console.log(numbers)



// Not Answered

// Simple Sorting Function: Sort an array of numbers in ascending or descending order.

let arrayOfNumber = [6, 3, 4, 1, 7, 2]

function sortArray(){
    let ascending = arrayOfNumber
    console.log(ascending)

}

sortArray()



//Function Parameters

// NumberAdder: Take two numbers as parameters and return their sum.


function sumAddition(sum1, sum2){
    let solve = sum1 + sum2
    console.log(`The total is ${solve}`)
}

sumAddition(20, 30)



// Word Length Checker: Take a word as input and return its length.



function wordLength(confirmLength){

    //confirmLength = `Incredible`
    let save = confirmLength.length
    console.log(`The lenght of ${confirmLength} is ${save}`)
    
}



wordLength(`international`)



// Age Difference Calculator: Calculate the age difference between two people given their birth years.

function ageDifference(person1, person2){

    let calculateByYear = Math.abs(person1 - person2)
    // With Math.abs we will be able to eliminate a negative return regardless of the year orders
    calculateByYear = Number(calculateByYear)

    console.log(`The birth year of the first person is ${person1} and the second person is${person2}, with both having a age difference of ${calculateByYear}`)

}

ageDifference(1970,2023)



// Temperature Converter: Convert between Celsius and Fahrenheit.

function convertTemp(celsius){

    let fahrenheit = celsius * 9/5 + 32

    console.log(`The answer will be ${fahrenheit} in fahrenheit`)

}


convertTemp(50)



// Currency Converter: Convert between two different currencies

function convertCurrency(dollar){

        let todayExchangeRate = 1,463

        let naira = dollar * todayExchangeRate

        console.log(`As at 28th of Febrauary 2024, the dollar rate of ${dollar} is ${naira} in naira`)

}

convertCurrency(1000)



// Arrow Functions

// Array Element Doubler: Double each element in an array.

const arrowFunction = (testing) => {

    const doubleElement = [];

    for(let i = 0; i < testing.length; i++){
        const resultDouble = testing[i];
        doubleElement.push(resultDouble);doubleElement.push(resultDouble)
    }

    console.log(doubleElement);

}

arrowFunction([1,2,3])



// String Concatenation: Combine two strings into a single string.

const string1 = `Hello World`
const string2 = `Happy to see you`

const newString = () => string1 + " " + string2

const combineString = newString()
console.log(combineString)



// Even Number Filter: Filter an array of numbers to keep only the even ones

const array = [1, 4, 5, 6, 8]

const arrayOfEvenNumber = array.filter(number => number % 2 === 0)

console.log(arrayOfEvenNumber)



// Word Splitter: Split a sentence into an array of words.


const sentence = `You will get there`

const splitArray = sentence => sentence.split(``)

const storeResult = splitArray(sentence)

console.log(storeResult)



// Number Multiplier: Multiply a number by a given factor.

const number = 5
const factor = 3

const letMultiplication = (number, factor) => number * factor

const solution = letMultiplication(number, factor)
console.log(solution)



// Object Literals

// Person Object: Create an object representing a person with properties like name, age, and occupation.

let person = {
    name : `Adeyemi Otenaike`,
    age : 29,
    occupation : `Intending Software Developer`
}

console.log(person)



// Book Object: Create an object representing a book with properties like title, author, and genre.

let book = {
    title : `The Lord of the Rings`,
    author : `J.R.R. Tolkien`,
    genre : `Fantasy, Epic`
}

console.log(book)




// Animal Object: Create an object representing an animal with properties like species, name, and age.

let animal = {
    name : `Lion`,
    species : `Large cat of the genus Panthera`,
    symbol : `Power, Bravery, Courage, Strength, Fearlessness and Ferocity`
}

console.log(animal)



// Product Object: Create an object representing a product with properties like name, price, and description.

let product = {
    name : `PlayStation 5`,
    price : `$1200`,
    description : `The latest Sony PlayStation introduced in November 2020.`
}

console.log(product)



// Create an object representing an address with properties like street, city, state, and zip code.

let address = {
    street : `Vigostrasse 5`,
    city : `Hamburg`,
    state : `Hamburg`,
    zipCode : `18909`
}

console.log(address)



// Arrays:

// Number Sorter: Sort an array of numbers in ascending or descending order.

let sortArray = [
    8,
    10,
    4,
    1,
    3,
    13,
    5,
    9,
    15,
    25,
    20
]

let ascending = sortArray.sort(function (a, b) { return a - b })

//let descending = sortArray.sort(function (a, b) { return a - b })

console.log(ascending)



// Word Finder: Check if a given word exists within an array of words.

const arrayOfWords = [
    `Big`,
    `Small`,
    `Medium`,
    `Large`
]

const check = arrayOfWords.filter(function(confirmIfExist){
    return confirmIfExist === `Medium`
})

console.log(check)



// Largest Number Finder: Find the largest number in an array

let newNumber = [3, 5, 1, 15, 32, 6]

let find = Math.max(...newNumber)
console.log(find)



// Duplicate Remover: Remove duplicate elements from an array.

let checkElement = [1, 3, 3, 9, 8, 7, 15, 10]

let unique = [...new Set(checkElement)]
console.log(unique)


// Array Reverser: Reverse the order of elements in an array.

let element = [1, 3, 9, 8, 7, 15, 10]

let reverse = element.reverse()
console.log(reverse)



// While Loops:

// Guessing Game: Keep prompting the user for a guess until they guess the correct number.

let number = 15
number = window.prompt(`Guess the right number`)
number = Number(number)


while(number < 10){

    if(number === 3){
        console.log(`${number} is the correct guess`)
        break

    }else{
        console.log(`Your guess is wrong, keep trying, your next guess might be the right number`)
    }

    number++


}

// Password Validator: Keep prompting the user for a password until it meets certain criteria (length, complexity).

let passwordLength = window.prompt(`Enter Your Password:`)

let i = 0

while(i <= 8){

    if(passwordLength.length < 8){
        console.log(`Your password haven't met the lengh required which is 8`)
    }else{
        console.log(`Your password meet the criteria required`)
    }

    i++
}



// Number Counter: Count from 1 to a given number.

let countNumber = 1

while(countNumber <= 20){
    console.log(`count ${countNumber}`)
    countNumber++
}



// Number Factor Finder: Find all factors of a given number.

const givenNumber = window.prompt(`ENTER A GIVEN NUMBER`)

console.log(`The factors of ${givenNumber} is:`);

let i = 1

while(i <= givenNumber){

    if(givenNumber % i == 0){
        console.log(i)
    }

    i++

}



// Not answered 

// Simple Number Guessing Game: Generate a random number and let the user guess it within a limited number of tries.


const guessNumber = window.prompt(`Guess the generated number`)

const randomNumber = 30

while(guessNumber = randomNumber){

    if(guessNumber === randomNumber){

            console.log(`Great guess! That is the number.`)
            guessNumber++
    }


}




//Math Object:

// Random Number Generator (useMath.random() to generate random numbers)

let randomNumber = Math.random() 
console.log(randomNumber)



// Quadratic Equation Solver (useMath.sqrt()to find roots of aquadratic equation)


let display = window.prompt(`ENTER A NUMBER TO KNOW THE SQAURE ROOT: `)
display = Number(display)

let quadraticSolver = Math.sqrt(display)

console.log(quadraticSolver)



// Distance Calculator (use the Pythagorean theorem to calculate distance between points)

let a = 3-1;
let b = 4-1;

let calculateDistance = Math.sqrt(a * a + b * b);

console.log(`The distance is ${calculateDistance}`)



// Trigonometric Calculator (calculate sine,cosine,tangent using Math.sin(), Math.cos(), Math.tan())

let declareSine = window.prompt(`Enter a number`)
declareSine = Number(declareSine)

let calculateSine = Math.sin(declareSine)
console.log(`The sine is ${calculateSine}`)


let declareCos = window.prompt(`Enter a number`)
declare = Number(declareCos)

let calculateCos = Math.cos(declareCos)
console.log(`The cos is ${calculateCos}`)


let declareTan = window.prompt(`Enter a number`)
declare = Number(declareTan)

let calculateTan = Math.tan(declareTan)
console.log(`The tan is ${calculateTan}`)

// Finance Calculator (calculate simple interest, compound interest,loan payments)

// Simple Interest

let principal = window.prompt(`Enter the principal`)
let rate = window.prompt(`Enter the rate`)
let time = window.prompt(`Enter the time`)

function calculateSimpleInterest(principal, rate, time){
  
    
    // Convert rate to decimal (if percentage is provided)
    const decimalRate = rate / 100;
  
    // Calculate simple interest using Math methods
    const interest = principal * decimalRate * time;
  
    // Return the calculated interest
    return console.log(`The simple interest on a principal of ${principal} at a rate of ${rate}% for ${time} years is: ${interest.toFixed(2)}`);
  }

  //const simpleInterestAmount = calculateSimpleInterest(1000, 5, 2)
  const simpleInterestAmount = calculateSimpleInterest(principal, rate, time)
  console.log(simpleInterestAmount)


// compound Interest

const principal = window.prompt(`Enter the principal amount`)
const interestRate = window.prompt(`Enter the interest rate`)
const timeInYears = window.prompt(`Enter the year`)
const compoundingFrequency = window.prompt(`Enter the frequency`)


  function calculateCompoundInterest(principal, interestRate, timeInYears, compoundingFrequency) {
  
    // Convert interest rate to decimal (if percentage is provided)
    const rate = interestRate / 100;
  
    // Calculate the number of compounding periods per year
    const numPeriods = compoundingFrequency;
  
    // Calculate amount using the compound interest formula
    const amount = principal * (1 + rate / numPeriods) ** (numPeriods * timeInYears);
  
    // Calculate compound interest
    const compoundInterest = amount - principal;
  
    // Return an object with amount and compound interest
    return {
      amount: amount.toFixed(2), // Format amount to two decimal places
      compoundInterest: compoundInterest.toFixed(2)
    };
  }
  
  
  
  const result = calculateCompoundInterest(principal, interestRate, timeInYears, compoundingFrequency);
  console.log("Amount after", timeInYears, "years:", result.amount);
  console.log("Compound interest earned:", result.compoundInterest);

// Loan Payment

const principal = window.prompt(`Enter the principal amount`);
const interestRate = window.prompt(`Enter interest rate amount`); // Annual interest rate
const loanTerm = window.prompt(`Enter the long term`); // Months


function calculateLoanPayment(principal, interestRate, loanTerm) {

    // Convert interest rate to monthly rate (assuming annual rate)
    const monthlyInterestRate = interestRate / 100 / 12;
  
    // Calculate the monthly payment using the loan payment formula
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
  
    return monthlyPayment.toFixed(2); // Round to two decimal places
  }
  
  const monthlyPayment = calculateLoanPayment(principal, interestRate, loanTerm);
  console.log(`Your monthly loan payment is: $ + ${monthlyPayment}`);







// ASSIGNMENT 2

// Create an array containing the numbers 1 to 10
let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers)

// Access the third element of the array

let displayThirdElement = numbers[3]
console.log(displayThirdElement)

// Change the value of the last element to 0

let lastElement = 9
let theChangedLastElement = 0
numbers[lastElement] = theChangedLastElement

console.log(numbers)

// Add a new element to the end of the array
let addNewElementEnd = numbers.push(11)
console.log(numbers)

// Remove the first element from the array

let removeFirstElement = numbers.shift()
console.log(numbers)

// Find the index of the number 5 in the array
 let indexForTheNumber = numbers.indexOf(5)
 console.log(indexForTheNumber)

// Check if the array contains the number 8
let containsAnumber = numbers.includes(8)
console.log(containsAnumber)

// Reverse the order of the elements in the array
let reverseItem = numbers.reverse()
console.log(reverseItem)

// Sort the array in ascending order.

let acsendingOrder = numbers.sort()
console.log(acsendingOrder)


// Create a new array containing only the even numbers from the original array.

let bigMe = [1,2,3,4,5,6,7,8,9,10]
let i = []

 for(let i = 1; i <= bigMe.length; i++){

    if(i % 2){
       continue
    }

    console.log(i)

 }


// While loops:

// Write a while loop that prints the numbers from 1 to 10.

let i = 1

while(i <= 10){
    console.log(i)
    i++
    
}


// Write a while loop that sums all the numbers in an array
const sumArray = [2,4,5,6,8]

let sum = 0
let v = 0;

while(v < sumArray.length){
    let result = sum += sumArray[v]
    console.log(result)
    v++
}


// Write a while loop that finds the largest number in an array

const largestNumber = [30,23,12,55,89,44,100]

let l = 0

while(l <= largestNumber.length){
    let displayMax = Math.max(...largestNumber)
    console.log(displayMax)
    l++
}



// Not Answered
// Write a while loop that prompts the user for input until they enter a valid email address



// Write a while loop that simulates a dice roll until a 6 is rolled.

let v = 1

 while(v <= 6){
    if(v === 8){
        console.log(`THE LOOPS WILL BREAK HERE`)
        break
    }else{
        console.log(v)
    }
    v++
    
 }

 // ForEach Method:

// Use the forEach method to print each element of an array.

const elementToPrint= [`Bimbo`, `Ezekiel`, `Tolu`]
elementToPrint.forEach(function(printDnames){
    console.log(printDnames)
})

// Use the forEach method to double each element of an array
const numbers = [1, 2, 3];
let doubled = [];


numbers.forEach(function(num, index){
    doubled[index] = num * 2
});
console.log(doubled);
*/

// Use the forEach method to create a new array containing only the strings from a mixed array.

const arrayNumber1 = [1, 2, 3, 4, 5]
const arrayNumber2 = [`big`, `small`, `medium`, `large`, `little`]

const mixedTheArray = [...arrayNumber1, ...arrayNumber2]
const stringArray = [];
console.log(mixedTheArray)

mixedTheArray.forEach(function(element){
    if(typeof element === "string" ){
        stringArray.push(element)
    }
})

console.log(stringArray)

// Use the forEach method to find the sum of all even numbers in an array.

const arrayOnlyEvenSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenSum = 0
let oddSum = 0




arrayOnlyEvenSum.forEach(function(letDisplayIt){
        
    if(letDisplayIt % 2 == 0){
        evenSum += letDisplayIt
    }
})

console.log(evenSum)


// Use the forEach method to filter an array based on a certain condition.

let occupation = [
	{
  		name: "aaron",
    	position: "developer"
 	 },
  	{
  		name: "beth",
    	position: "ui designer"
  	},
  	{
  		name: "cara",
    	position: "developer"
  	},
 	{
  		name: "daniel",
    	position: "content manager"
 	 },
  	{
  		name: "ella",
    	position: "cto"
  	},
  	{
  		name: "fin",
    	position: "backend engineer"
  	},
  	{
  		name: "george",
    	position: "developer"
  },

]

let theResult = occupation.filter(member => member.position === "developer")

console.log(theResult)



// Rest parameters:

//Define a function that accepts any number of arguments using rest parameters

function nameOfPresidents(...thePresdient){
    let newResult = `The name of the most popular presidents are : ${thePresdient}`
    return newResult
}

console.log(nameOfPresidents(`Barack Obama`, `Donald Trump`))



// Not Answered
// Use rest parameters to create a function that calculates the average of a list of numbers.

const numbers = [2, 5, 8, 10];

function calculateAverage(...numbers) {
    
    // Calculate the sum of all numbers
    const sum = numbers.reduce((total, num) => total + num, 0);
  
    // Calculate the average by dividing the sum by the number of elements
    const average = sum / numbers.length;
  
    return average;
  }
  
  const avg = calculateAverage(...numbers);
  console.log(`The average of the numbers is: ${avg}`);


// Use rest parameters to create a function that logs all the arguments passed to it.

function logParameter(...theArguments){
    console.log(`Below are the various argument : ${theArguments}`)
}

logParameter(`Manchester United`, `Chelsea`, `Arsenal`, `Bolton`)

// Use rest parameters to create a function that combines multiple arrays into a single array.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

function combineArrays(...arrays) {
    // Use the spread operator to concatenate all arrays into a single array
    return [].concat(...arrays);
  }
  
  const newArray = combineArrays(array1, array2, array3);
  console.log(newArray);


// Not Answered
// Use rest parameters to create a function that accepts a variable number of objects and merges them into a single object.



// Object literals:

// Create an object literal representing a person with properties for name, age, and address

let personInfor = {

    name : `Ezekiel Newton`,
    age : `23`,
    address : `15, newton street, lagos, Nigeria`

}

console.log(personInfor)

// Access the name property of the person object.

let accessName = personInfor.name
console.log(accessName)

// Change the value of the age property.

let changeAgeValue = personInfor.age
let confirmChange = changeAgeValue = 29
console.log(confirmChange)


// Add a new property to the object called "email".

personInfor.email = `bignewton@gmail.com`
console.log(personInfor)

// Delete the address property from the object.

let save = delete personInfor.email
console.log(save)
console.log(personInfor)

// For loops:
// Write a for loop that prints the numbers from 1 to 10.

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// Write a for loop that sums all the numbers in an array.

const fitIn = [5, 28, 39, 60, 80]
let addIt = 0;
for(let i = 0; i < fitIn.length; i++){
    addIt += fitIn[i];
}

console.log(addIt);

// Write a for loop that finds the largest number in an array

const largestLoop = [13, 23, 10, 45, 78, 82, 18, 100]
let renovate = 0

for(let i = 0; i < largestLoop.length; i++){
   renovate = Math.max(...largestLoop)
   
}

console.log(renovate)

// or
// const reTry = [34, 28, 29, 90, 35]
// let useNew = 0;

// for(let i = 0; i < reTry.length; i++){
//     if(useNew < reTry[i]){
//             useNew = reTry[i]
//     }
//  }

//  console.log(useNew)


// Not Yet Answered
// Write a for loop that creates a new array containing the squares of the numbers in another array

// const squareArray = [2, 4, 6, 8, 10]
// let doubleSquare = []


// for(let i = 0; i < squareArray.length; i++){

//     if(doubleSquare === squareArray[i]){
//         doubleSquare ** 2
//     }

// }

// console.log(doubleSquare)

// Write a for loop that iterates over an object's properties and values

const containerForTheObject = [
    {
        team : `Manchester United`,
        playerName : `Mainoo`,
        position : `Defensive Midfielder`,
        
    },

    {
        team : `Arsenal`,
        playerName : `Odegaard`,
        position : `Attacking Midfielder`,
        
    },

    {
        team : `Manchester City`,
        playerName : `Foden`,
        position : `Winger`,
        
    }
]



for(i = 0; i < containerForTheObject.length; i++){

    let bringResult = containerForTheObject[i]
    console.log(bringResult)
}

// Use a for...of loop to print each element of an array

const jazzPrint = [ 11, 12, 13, 14, 15]

for(let key of jazzPrint){
    console.log(key)
}

// Use a for...of loop to create a new array containing the string lengths of each element in another array

// Use a for...of loop to iterate over the keys of an object

const weHere = [
    {
        country : `Tunisia`,
        population : `100 million`

    },

    {
        country : `Nigeria`,
        population : `192 million`

    },

    {
        country : `Benin`,
        population : `10 million`

    }

]

for(let key of weHere){
        console.log(key)
}

// Use a for...of loop to iterate over the values of an object

const layHere = [
    {
        country : `Spain`,
        popularClub : `Real Madrid`

    },

    {
        country : `England`,
        popularClub : `Liverpool`

    },

    {
        country : `Italy`,
        popularClub : `Inter Milan`

    }

]

for(let key of layHere){
        console.log(key.popularClub)
}

// Use a for...of loop to iterate over both keys and values of an object

const cinemaDisplay = {

        name : `Adeyemi`,
        country : `Nigeria`,
        currentLocation : `Germany`

}

for(let [key, value] of Object.entries(cinemaDisplay)){
    console.log(key, value)
}

// Additional Questions:

// Explain the difference between a while loop and a for loop.

// For a for loop you have to intialize inside the for loop in the bracket, as well as the condition and update block while the while loop we have to initialize outside the while block and update block (increment) inside the while loops.


// When would you use the forEach method over a traditional for loop? 
// It's use to loop over array and it's a higher order array method that is use to loop through an array.


// What are the benefits of using rest parameters?
// Rest parameters allows us to provide many values for the parameters using the(...) 


// How can you create nested objects using object literals?
// This can be acheived by creating an object literal inside the main object literal, it will be a child inside the parent literal. 
//Below is an example:

let dataBaseRecord = {
    dateCreated : "22nd Dec, 2023",
    numberOfNewUsers : 46,
    activeNewUsers : 21,
    activeNewSubscribers : false,
    oldSubscribers : {
        numberOfActiveOldSubscribers : 20,
        renewedSubscriptions : true
    }
}

console.log(dataBaseRecord)
let updateData = dataBaseRecord.oldSubscribers
console.log(updateData)

// What are the different ways to iterate over an array in JavaScript?
// Using the for Loop
// Using the forEach Method
// Using a for...of Loop
// Using the filter Method
// Using the while loop

// Write a function that removes duplicates from an array.


const originalArray = [1, 2, 3, 2, 4, 5, 1, 6, 7, 8, 8];


function removeDuplicatesWithSet(arr) {
    // Create a Set to automatically remove duplicates
    return [...new Set(arr)];
  }
  
  // Example usage
  const uniqueArray = removeDuplicatesWithSet(originalArray)
  console.log(uniqueArray)



// Write a function that merges two arrays without duplicates.

const rebuildArray = [1, 2, 3, 2, 4, 5, 1, 6, 7, 8, 8];
const rebuildSecondArray = [9, 10, 11, 9, 10, 12, 13, 11, 14, 15, 15];


function removeDuplicatesWithSet(arr1, arr2) {


    // Create a Set to automatically remove duplicates
    return [...new Set(arr1, arr2)];
  }
  
  // Example usage
  const uniqueNewArray = removeDuplicatesWithSet(rebuildArray)
  const uniqueNewSecondArray = removeDuplicatesWithSet(rebuildSecondArray)

  const combined = [...uniqueNewArray, ...uniqueNewSecondArray]
  console.log(combined)



// Write a function that checks if two arrays have any common elements. 

// Declare two array
const myFirstArray = [1,2,3,4,5]
const mySecondArray = [1,4,2,6,5]

function confirmIfHavingCommonElement(array1, array2){


    // Loop for myFirstArray
    for(let v = 0; v < myFirstArray.length; v++){

        // Loop for mySecondArray
        for(let c = 0; c < mySecondArray.length; c++){

            // Compare the element of each and
            // every element from both of the
            // arrays
            if(array1[v] === array2[c]){
                //console.log(`They have common element`)

                 // Return if common element found
                return true
            }

        }

    }
    // Return if no common element exist
        return false

}

console.log(confirmIfHavingCommonElement(myFirstArray, mySecondArray))


// Write a function that creates a new array containing only the unique elements from two arrays.

// Using the Set Method not only allows you to combine values, it also checks value equality (using the === strict equality operator) because each item in the set must be unique; the first instance of a value is preserved, and subsequent instances are discarded.

const arrayNo1 = [`Tolu`, `Mane`, `Messi`]
const arrayNo2 = [`Victor`, `Vicki`, `Mane`]

const combinedBothArrays = new Set([...arrayNo1, ...arrayNo2])
// We get an oject back instead of an array, but that can be fixed with the step below:
const displayArray = [...combinedBothArrays]
console.log(displayArray)


// Write a function that flattens a nested array into a single-level array.


let dFirstArray = [
    80,
    100,
    120,
    500
]

let dSecondArray = [
    99,
    1000,
    7000,
    3
]

let dNestedArray = [dFirstArray, dSecondArray]
// Array flattening is the process of converting a multi-dimensional array into a single-dimensional array in programming using flat()
let flatten = dNestedArray.flat()
console.log(flatten)


// ASSIGNMENT 3

// How can you select an element by its ID using JavaScript?

// const saveElement = document.getElementById()

// How can you select all elements of a specific class name?

// const saveElementTwo = document.getElementsByClassName()

// How can you select the first child element of a given element?

// const firstChild = saveElement.firstElementChild

// How can you select all elements that match a specific CSS selector?

// const allElementCssSelector = document.querySelectorAll()

// How can you change the text content of an element?
// changeText.innerText = `Hello`

// How can you modify the value of an HTML attribute?
// modifyHtml.innerHtml = `<p> Hello </p>`

// How can you add a new element to the DOM?
// const createNewElement = document.createElement()

// How can you remove an element from the DOM?
// const newElement = document.createElement()
// newElement.remove()

// How can you access the parent element of a given element?
// const myButton = document.getElementById()
// const myParent = myButton.parentElement

// How can you access the next sibling element of a given element?
// const headingElement = document.getElementById()
// const afterSibling = headingElement.nextElementSibling


// How can you iterate over all child elements of a given element?
// let myContainer = document.getElementById()
// let allChildren = myContainer.children

// How can you find all elements matching a specific condition within a subtree?
/*
We can use the querySelectorAll to find all descendant elements matching the selector in the entire subtree, followed by filtering them based on the specific condition.
*/

// How can you change the inline style of an element using JavaScript?
/*
It can be change by directly accessing the style property of the element. We can then set the value of individual style properties using dot notation.

// const element = document.getElementById('my-element');
// element.style.backgroundColor = 'red';
// element.style.fontSize = '1rem';
*/

// How can you you add or remove CSS classes from an element?
// By using the Class List we can be able to addd a class name created by javascript, it also allows us to access the class behavior of an element for manipulation. Example;
// let myContainer = document.getElementById(`newContainer`)
// let newElement = document.createElement(`div`)
// newElement.classList.add(`joseph-class`)

// To remove CSS classes
//newElement.classList.remove(`joseph-class`)

// How can you toggle between two different styles for an element?
// When a class name is not present, toggle method will add the class name but if the class name is present the toggle method will remove the class name. Example;
// let myContainer = document.getElementById(`newContainer`)
// let newElement = document.createElement(`div`)
// newElement.classList.add(`joseph-class`)
// newElement.classList.toggle(`joseph-class`)

// How can you dynamically create and add a CSS stylesheet to the document?


// Explain the syntax and purpose of the forEach method in JavaScript?
/*
The forEach method makes use of the callback function which accept up to three different arguments, but we have to understand not all of them are required. The forEach() array method loops through any array, carrying out a provided function once for each array element in ascending index order. This function is referred to as a callback function. The forEach() array iteration method accepts a callback function that holds arguments that can be used within the callback function for each array item, such as the array item, the index of the item, and the entire array.
*/

// How does forEach differ from traditional for loops in terms of scope and behavior?
/*
A forEach loop is a method available on arrays in JavaScript. It provides a simpler and more concise syntax for iterating over array elements. It takes a callback function as an argument and automatically handles the iteration for you. While a for loop is a traditional loop that allows you to control the iteration explicitly. It requires you to define a starting point, a condition for the loop to continue, and an operation to be performed after each iteration. One advantage of using a forEach loop is that you don't need to manually manage the index or handle the iteration logic yourself. It can also be easier to read and understand.
*/

// Write code to double each element in an array using forEach
const theNumbers = [1, 2, 3];
let doubled = [];


theNumbers.forEach(function(num, index){
    doubled[index] = num * 2
});
console.log(doubled);

// Create a new array containing only strings from a mixed array using forEach.
const arrayNewNumber1 = [1, 2, 3, 4, 5]
const arrayNewNumber2 = [`london`, `berlin`, `abia`, `paris`, `togo`]

const mixedTheNewArray = [...arrayNewNumber1, ...arrayNewNumber2]
const stringNewArray = [];
console.log(mixedTheNewArray)

mixedTheNewArray.forEach(function(element){
    if(typeof element === "string" ){
        stringNewArray.push(element)
    }
})

console.log(stringNewArray)

// Filter an array to include only even numbers using forEach.

const arrayOnlyEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumber = [];

arrayOnlyEven.forEach(function(letDisplayThem){
        
    if(letDisplayThem % 2 == 0){
        evenNumber.push(letDisplayThem) 
    }
})

console.log(evenNumber)

// Demonstrate how to access the current index within a forEach callback.

const arrayOnlyEvenIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

arrayOnlyEvenIndex.forEach(function(currentNumber, index) {
    if (currentNumber % 2 === 0) {
        evenNumbers.push({ number: currentNumber, index: index }); // Pushing an object containing both the number and its index
    }
});

console.log(evenNumbers);

// Explain how to break out of a forEach loop early
/*
We have to understand that the forEach loop in JavaScript does not support breaking out of the loop early using a break statement. However, we can achieve similar functionality by using some(), every(), or a simple for loop. But with a for loop , we are allow more flexibility in controlling the loop's behavior, including breaking out of the loop early.
*/

// Can you modify the original array directly within a forEach callback? Why or why not?
/*
No, you generally should not modify the original array directly within a forEach callback. Below is why:

Potential Side Effects: Modifying the array while iterating over it can lead to unexpected behavior and bugs. Since forEach iterates over each element in the array sequentially, modifying the array's length or content during the iteration can result in elements being skipped or processed incorrectly.

Mutability vs. Immutability: JavaScript arrays are mutable, meaning you can change their contents after they're created. However, modifying an array during iteration violates the principle of least surprise and can make your code harder to reason about. It's generally better to create a new array with the desired modifications instead of mutating the original array.

Readability and Maintainability: Modifying the original array within a forEach callback can make your code less readable and harder to maintain. It's more straightforward for other developers (or yourself in the future) to understand the code's behavior if modifications to the array are performed outside the iteration.

If you need to modify the array while iterating over it, consider using a traditional for loop instead of forEach. With a for loop, you have more control over the iteration process and can safely modify the array without encountering unexpected behavior. However, even with a for loop, it's essential to exercise caution and ensure that your modifications don't inadvertently affect the loop's behavior.
*/

// Describe common use cases for forEach in JavaScript applications.

/*

The forEach is a versatile method that simplifies array iteration and enables us to perform a wide range of operations efficiently in JavaScript applications. However, it's important to use forEach appropriately and be aware of its limitations, such as the inability to break out of the loop early or modify the original array safely.

Here are some common use cases for forEach in JavaScript applications:

Data Processing and Transformation: forEach is often used to process and transform data stored in arrays. We can apply operations to each element of the array individually, such as updating values, filtering elements, or performing calculations.

Displaying Data in UI: When working with web applications, forEach can be used to iterate over arrays containing data retrieved from a server or stored locally and dynamically generate HTML elements to display the data in the user interface.

Event Handling: In front-end development, forEach can be used to attach event listeners to multiple elements in the DOM. You can iterate over an array of DOM elements and attach event handlers to each element to handle user interactions, such as clicks or keyboard input.

Asynchronous Operations: While forEach itself is synchronous, it can be useful in scenarios where we need to perform asynchronous operations for each element in an array. You can use forEach to iterate over an array and initiate asynchronous tasks within the callback function, such as making AJAX requests or fetching data from a database.

Array Initialization and Population: forEach can be used to initialize or populate arrays with values based on certain criteria. We can iterate over existing arrays, apply conditions or transformations to the elements, and populate a new array with the modified values.

Logging and Debugging: During development, forEach can be helpful for logging or debugging purposes. You can use it to iterate over arrays and log information about each element to the console for debugging purposes, such as inspecting the structure of complex data objects.
*/

// When would you choose forEach over other looping methods?
/*
forEach is a suitable choice when we need to iterate over an array and execute a callback function for each element, especially when simplicity, readability, and side effects are priorities. However, it's essential to consider your specific requirements and the characteristics of other looping methods before deciding which approach to use.
*/

// Explain the syntax and purpose of the for...of loop in JavaScript.
/*

The for...of loop in JavaScript is a convenient way to iterate over iterable objects, such as arrays, strings, sets, maps, and more. It provides a simpler syntax compared to traditional for loops and allows you to focus on the values of the iterable rather than managing indices or keys. 

Example with Syntax

const brillant = [1, 2, 3, 4, 5];

for (const element of brillant) {
    console.log(element); // Output: 1, 2, 3, 4, 5
}

variable: `element` A variable that will be assigned the value of each element in the iterable for each iteration.
of: The keyword used to indicate the relationship between the variable and the iterable.
iterable: `brillant` An object that can be iterated over, such as an array, string, set, map, or any other object that implements the iterable protocol.

Purpose:

Simplified Iteration: The primary purpose of the for...of loop is to simplify the process of iterating over iterable objects. It abstracts away the complexities of managing indices or keys, allowing you to focus directly on the values of the iterable.

Readability and Conciseness: The syntax of the for...of loop is concise and easy to read, making your code more expressive and understandable. It eliminates the need for manual index management, reducing the likelihood of off-by-one errors and making your code cleaner.

Compatible with Iterables: The for...of loop works with any object that implements the iterable protocol, including built-in JavaScript objects like arrays, strings, sets, and maps, as well as custom iterable objects. This makes it versatile and widely applicable in various programming scenarios.

Avoids Mutating Iterators: Unlike forEach and other higher-order functions like map or filter, for...of loops do not mutate the original iterable. This can be beneficial when you want to iterate over an iterable without modifying it.

Efficient Performance: The for...of loop generally offers good performance compared to other looping constructs in JavaScript, especially when iterating over large arrays or collections.

*/

// How does for...of differ from traditional for loops and forEach?

/*

Here's a summary of the differences between for...of loops, traditional for loops, and the forEach method in JavaScript:

for...of Loop:

Syntax: for (variable of iterable) 
Purpose: Simplified iteration over iterable values.
Use Cases: When you need to iterate over values of an iterable object without index management.

Traditional for Loop:

Syntax: for (initialization; condition; increment/decrement) 
Purpose: Manual control over iteration with index management.
Use Cases: When you need precise control over loop behavior, such as iterating over a range of indices or performing complex looping patterns.

forEach Method:

Syntax: array.forEach(callbackFunction)
Purpose: Apply a callback function to each element of an array.
Use Cases: Executing a function for each element of an array, especially in functional programming contexts.

Differences:

Syntax: for...of and forEach offer more concise syntax compared to traditional for loops.
Control: Traditional for loops provide more control over iteration, including manual index management and custom logic.
Mutability: for...of and forEach do not mutate the original iterable, while traditional for loops allow direct manipulation of elements.
Use Cases: Each iteration method has its own strengths and is suited for different scenarios, from simplified iteration to precise control and functional programming paradigms.

*/

// Iterate over an array of numbers and print their squares using for...of.

const tryNumbers = [1, 2, 3, 4, 5];
for (const viewIt of tryNumbers) {
    const square = viewIt * viewIt;
    console.log(`The square of ${viewIt} is ${square}`);
}

// This code iterates over each element (viewIt) in the tryNumbers array. For each element, it calculates the square by multiplying the tryNumbers by itself (viewIt * viewIt) and then logs the result using console.log().


// Create a new array containing the string lengths of each element in another array using for...of.

const myStrings = ["apple", "banana", "cherry", "date", "pounded yam"];
const theStringLengths = [];

for (const result of myStrings) {
    theStringLengths.push(result.length);
}

console.log(theStringLengths); 

// Iterate over the keys of an object using for...of.

const myDetails = {
        name : "Adeyemi",
        country : "Nigeria",
        gender : "Male",
        education : "Masters of Science",
        bvnNumber : 345678,
    }




for(const result of Object.keys(myDetails)){
    console.log(result)
}

// Iterate over the values of an object using for...of.

const checkMyDetails = {
    name : "Doyin",
    country : "Ghana",
    gender : "Female",
    bvnNumber : 845678,
}




for(const displayResult of Object.values(checkMyDetails)){
    console.log(displayResult)
}


// Explain how to access both keys and values in a for...of loop.



const ourDetails = {
    name : "Victoria",
    country : "Canada",
    gender : "Female",
    bankNumber : 120803033,
    accountBalance : "$2344324"
}


for(const theKey of Object.getOwnPropertyNames(ourDetails)){
    const theValue = ourDetails[theKey]
    console.log(`Key: ${theKey}, Value: ${theValue}`);
}

// Can you modify the original array or object within a for...of loop?

/*You can modify the elements of an array while iterating over it using a for...of loop. However, you should be cautious about adding or removing elements from the array, as it can affect the loop's behavior and potentially lead to unexpected results, such as skipping elements or infinite loops. Here is an example;


let textingArrays = [1, 2, 3, 4, 5, 6];

for (let confirmResult of textingArrays){
    if(confirmResult % 2 === 0){
        textingArrays.push(confirmResult * 2); // Modifying the array by adding new elements
    }
}
console.log(textingArrays)

*/

// Describe common use cases for for...of loops in JavaScript applications.

/*
The for...of loops in JavaScript is very versatile and is commonly used for iterating over iterable objects. Here are some common use cases:

- Iterating Over Arrays: This is perhaps the most common use case. You can use for...of to loop through arrays to access each element individually.

const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}

- Iterating Over Strings: Strings are iterable in JavaScript. You can use for...of to iterate over each character in a string.

const str = "Hello";
for (const char of str) {
    console.log(char);
}

- Iterating Over Maps: for...of loops can iterate over the entries of a Map, providing both the key and value.

const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const [key, value] of map) {
    console.log(key, value);
}

- Iterating Over Sets: Sets store unique values. You can use for...of to iterate over each value in a Set.

const set = new Set([1, 2, 3, 4, 5]);
for (const value of set) {
    console.log(value);
}

- Iterating Over DOM Collections: for...of can be used to iterate over DOM collections like NodeList.

const elements = document.querySelectorAll('.some-class');
for (const element of elements) {
    console.log(element);
}

*/

// When would you choose for...of over other looping methods?
/*
Here are some scenarios where for...of might be preferred over other looping methods:

- Working with iterable objects like arrays, strings, maps, sets, or generator functions.
- Needing to access both keys and values when iterating over objects.
- Wanting to avoid index management, as for...of abstracts it away.
- Dealing with asynchronous iterables or generator functions.
- Readability is important, as for...of often results in cleaner code.
- Using break or continue statements within the loop body is necessary.

*/

// Write a for loop that prints numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Write a for loop that sums all numbers in an array.

const loopNumbers = [1, 2, 3, 4, 5];
let allSum = 0;

for (let f = 0; f < loopNumbers.length; f++) {
    allSum += loopNumbers[f];
}

console.log("The sum of all numbers:", allSum);

// Find the largest number in an array using a for loop.

const largeNumbers = [10, 5, 20, 8, 15];

let largest = largeNumbers[0]; // Assume the first element is the largest

for (let i = 1; i < largeNumbers.length; i++) {
    if(largeNumbers[i] > largest) {
        largest = largeNumbers[i];
    }
}

console.log("The largest number:", largest);

// Create a new array containing the squares of numbers in another array using a for loop.

const checkArray = [10,12,14,16,18,20]
let squares = []

for(i = 0; i < checkArray.length; i++){
    squares.push(checkArray[i] * checkArray[i])
}

console.log("The square numbers for the numbers in the checkArray are :", squares)

// Iterate over an object's properties and values using a for loop.

const containerForTheTestedObject = [
    {
        name : "Peter Obi",
        party : "Labour Party",
        
    },
    {
        name : "Atiku Abubakar",
        party : "People Democratic Party",
        
    },
    {
        name : "Tinubu",
        party : "All Progressive Congress",
        
    }
]



for(i = 0; i < containerForTheTestedObject.length; i++){

    let confirmTheResult = containerForTheTestedObject[i]
    console.log(confirmTheResult)
}

// Explain the difference between initial, conditional, and increment expressions in for loops.

/*

- Initialization Expression: This is the initial statement executed before the loop starts. It is typically used to initialize the loop control variable.

- Conditional Expression: This expression is evaluated before each iteration of the loop. If the result is true, the loop continues; otherwise, the loop terminates.

- Increment (or Decrement) Expression: This expression is executed at the end of each iteration of the loop. It is commonly used to modify the loop control variable to progress towards the loop termination condition.

*/

// Demonstrate how to nest for loops to create multidimensional arrays.

// Define the number of rows and columns
const rows = 3;
const columns = 4;

// Create a multidimensional array using nested for loops
const multiArray = [];

for(let i = 0; i < rows; i++){
  multiArray[i] = []; // Initialize each row as an empty array

  for (let j = 0; j < columns; j++) {
    multiArray[i][j] = i * columns + j; // Assign a value based on row and column
  }

}

console.log(multiArray);


// Break out of a for loop early using the break statement.


const breakNumbers = [10, 5, 18, 2, 7, 20, 100];

for (let i = 0; i < breakNumbers.length; i++) {
  if (breakNumbers[i] > 30) {
    console.log("Found a number greater than 30:", breakNumbers[i]);
    break; // Exit the loop after finding the first number greater than 30
  }
}

// Continue to the next iteration of a for loop using the continue statement.

const continueNumbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < continueNumbers.length; i++) {
  if (continueNumbers[i] % 2 === 0) { // Check for even numbers
    // console.log("Skipping even number:", continueNumbers[i]);
    continue; // Skip processing the current even number and move to the next iteration
  }
  // This part will only be executed for odd numbers
  console.log("Processing odd number:", continueNumbers[i]);
}


// Describe common use cases for for loops in JavaScript applications.

/*

Here's a concise summary of common use cases for for loops in JavaScript applications:

- Iterating Over Arrays: Use for loops to iterate over the elements of an array, performing operations on each element.

- Generating Number Sequences: for loops can generate number sequences, aiding in algorithms and mathematical calculations.

- Iterating Over Object Properties: While for...in and for...of loops are preferred for object iteration, for loops can still be used to iterate over object properties.

- Nested Loops: for loops can be nested to handle tasks requiring multiple levels of iteration, like multi-dimensional arrays or matrices.

- Looping with a Step: Configure for loops to iterate with a step other than 1, allowing skipping elements or backward iteration.

- Performing Asynchronous Operations: In asynchronous programming, for loops are used to iterate over asynchronous tasks, such as fetching data from APIs or processing items in queues.

*/

// Select an element by its ID using getElementById.
/*
const selectElement = document.getElementById('my-element-id');
*/

// Select all elements of a specific class name using getElementsByClassName.
/*
const elements = document.getElementsByClassName('my-class-name');
*/

// Select the first child element of a given element using firstChild.
/*
const parentElement = document.getElementById('my-parent-element'); // Assuming the parent element has an ID
const firstChildElement = parentElement.firstElementChild;
*/

// Select all elements that match a specific CSS selector using querySelector.
/*
const selectTheElements = document.querySelectorAll('your-css-selector');
*/

// Access the parent element of a given element using parentNode.
/*
const newElement = document.getElementById('my-element'); // Assuming the element has an ID
const accessingParentElement = newElement.parentNode;
*/

// Access the next sibling element of a given element using nextSibling.
/*
const siblingElement = document.getElementById('my-element'); // Assuming the element has an ID
let nextSibling = siblingElement.nextSibling;
*/

// Iterate over all child elements of a given element using childNodes.
/*
const element = document.getElementById('my-element'); // Assuming the element has an ID
*/

// Access child nodes (including text and comments) & Iterate through child nodes, filtering for elements
/*
const childNodes = element.childNodes;

for (let i = 0; i < childNodes.length; i++) {
  const childNode = childNodes[i];
  if (childNode.nodeType === Node.ELEMENT_NODE) {
    // You can now access and modify the child element
    console.log(childNode.tagName); // Example: Get child element's tag name
    childNode.style.color = 'blue'; // Example: Set text color
  }
}
*/

// Find all elements matching a specific condition within a subtree using a recursive function.
/*

function findElements(rootNode, condition) {
   
    This function recursively searches a tree-like structure (represented by DOM nodes)
    and returns a list of all elements that meet the specified condition.
  
    Args:
        rootNode: The root node of the subtree (a DOM node).
        condition: A function that takes a node (DOM node) and returns True if it matches the condition.
  
    Returns:
        A list of all nodes in the subtree that meet the condition.
   

    const matchingElements = [];
  
    // Check the root node itself
    if (condition(rootNode)) {
      matchingElements.push(rootNode);
    }
  
    // Iterate through child nodes (if any)
    for (const childNode of rootNode.children) {
      matchingElements.push(...findElements(childNode, condition)); // Recursive call
    }
  
    return matchingElements;
  }
  */

  // Example usage: Find all elements with a specific class name
  /*
const rootElement = document.body; // Assuming the search starts from body
const matchingElements = findElements(rootElement, (element) => element.classList.contains('special-class'));
*/

// Explain the difference between childNodes, children, and getElementsByTagName.
/*

childNodes: Access all child nodes of an element (elements, text, comments).
children: Access only the direct element children of an element.
getElementsByTagName: Find all elements with a specific tag name across a document or subtree.

Returned Nodes:

childNodes: Includes all types of child nodes.
children: Limited to element nodes.
getElementsByTagName: Limited to element nodes matching the specified tag name.

Order:

childNodes & children: Nodes appear in the order they are defined in the HTML (top to bottom).
getElementsByTagName: Elements appear in the order they are found in the document, not necessarily following parent-child relationships.

Live Collection:

childNodes & children: Changes to the DOM are reflected in the collection.
getElementsByTagName: The collection is static and doesn't reflect DOM changes automatically.

Choosing the Right Method:

Use childNodes for all child node types (including text and comments) and live updates.
Use children for direct element children and live updates.
Use getElementsByTagName to find elements by tag name across the document (static collection).
*/

// Demonstrate how to modify element content (text and attributes) using DOM manipulation.

 // Select the element to be modified
 const exampleElement = document.getElementById("exampleElement")
 const exampleText = document.getElementById("exampleText");
 const exampleImage = document.getElementById("exampleImage");
 const newContainer = document.getElementById("empty-container")
 const myContainer = document.getElementById(`newContainer`)

 // Modify text content
 exampleText.textContent = "Modified Text Content";

 // Modify attribute (src) of an image
 exampleImage.src = "./image/GIwQxwVbAAAaRRp.jpeg";
 exampleImage.style.width = "100%"
 exampleImage.alt = "Modified Image Alt Text";

// Add a new element to the DOM using createElement and appendChild.
const createDiv = document.createElement("div")
createDiv.setAttribute("class", "new-me")
createDiv.innerHTML = "<p> hello new family</p>"
createDiv.style.fontSize = "3rem"
createDiv.style.color = "red"


const newDiv = document.createElement("div")
newDiv.setAttribute("class", "my-new.div")
newDiv.setAttribute("id", "my-new.div")
newDiv.innerHTML = "<p>Welcome here, do you like our image</p>"


exampleElement.append(createDiv)
newContainer.append(newDiv)


// Remove an element from the DOM using removeChild.
exampleElement.lastElementChild.remove()
// Change the inline style of an element using style.
newDiv.style.backgroundColor = "black"
// newDiv.style.padding = "1rem"
newDiv.firstChild.style.color = "white"
newDiv.style.borderRadius = "1rem" 
newDiv.firstChild.style.textAlign = "center";
newContainer.style.width = "100%"
newDiv.style.width = "30%"
newDiv.style.padding = "1rem"
newDiv.style.margin = "2rem auto"

// Add or remove CSS classes from an element using classList.

const newElement = document.createElement(`div`)
newElement.classList.add(`joseph-class`)

myContainer.append(newElement)

// Toggle between two different styles for an element using JavaScript.

const element = document.getElementById('my-element'); // Assuming the element has an ID
const style1Class = 'style-1'; // Class name for first style
const style2Class = 'style-2'; // Class name for second style

element.addEventListener('click', () => {
  element.classList.toggle(style1Class);
  element.classList.toggle(style2Class);
});




// Use a for loop to create 10 new paragraph elements and append them to the body of the document.

for (let i = 0; i < 10; i++) {
    // Create a new paragraph element
    const newParagraph = document.createElement("p");

    // Set the text content of the paragraph
    newParagraph.textContent = "Paragraph" + (i + 1);

    // Append the new paragraph to the body
   document.body.appendChild(newParagraph);
}


// Use forEach to iterate over all images on a page and add a border to each one.

/*
const images = document.querySelectorAll('img'); // Select all images

images.forEach(image => {
  image.style.border = '2px solid black'; // Set border style
});
*/







































    














