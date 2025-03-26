// Write a function that takes an array of numbers 
// and returns a new array containing only the odd numbers (numbers that aren’t divisible by 2).

// EXAMPLE

// filterOddNumbers([10, 15, 20, 25]); // ➞ [15, 25]
// filterOddNumbers([2, 4, 6]);        // ➞ []

let numbers = ([1, 2, 3, 4, 5]);  // ➞ [1, 3, 5]

function arrayOfOddNums(numbers) {
    const evenNums = numbers.filter(number => number % 2 === 0)
    console.log(numbers)
}






