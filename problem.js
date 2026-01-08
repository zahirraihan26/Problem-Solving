
// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3


// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false


// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:

// Input: [5, 1, 9, 3]
// Output: 9


// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10


// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]


// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"


// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120


// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

// Example:

// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:

// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..



// Problem 1: Reverse a String

function reverseString(i) {
    return i.split('').reverse().join('');
}
console.log(reverseString("hello"));


// Problem 2: Count Vowels in a String

function countVowels(a) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < a.length; i++) {
    if (vowels.includes(a[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("programming"));


// Problem 3: Check for Palindrome


function isPalindrome(a) {
  let reversed = "";
  for (let i = a.length - 1; i >= 0; i--) {
    reversed += a[i];
  }
  return a === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));


// Problem 4: Find the Maximum Number
function findMax(a) {
  let max = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
}

console.log(findMax([5, 1, 9, 3]));

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(a) {
  let b = [];       
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            b.push(a[i]);
        }   
    }
    return b;
}   
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// Problem 6: Sum of All Numbers in an Array

function sumArray(a) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); 


// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(a) {
  let evenNumbers = []; 
    for (let i = 0; i < a.length; i++) {    
        if (a[i] % 2 === 0) {
            evenNumbers.push(a[i]);
        }
    }
    return evenNumbers;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }   
    return words.join(' ');
}

console.log(capitalizeWords("hello world"));

// Problem 9: Find the Factorial of a Number

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// Problem 10: PingPong Challenge
function pingPong() {
    for (let i = 1; i <= 20; i++) { 
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        }
        else if (i % 3 === 0) {
            console.log("Ping");
        }       
        else if (i % 5 === 0) {
            console.log("Pong");
        }
        else {

            console.log(i);
        }
    }
}
pingPong();