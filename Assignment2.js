//Tasks

// Task1. Reverse a String (Without using reverse())

let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}

console.log("Reversed String:", reversed);

// EXPLANATION: create a function take string and take variable output then make loop start loop from last to first


// Task2. Check Palindrome
function checkPalidrome(str){
    let output="";
    for(let i=str.length-1; i>=0; i--){
        output+=str[i]
    }
    if(str==output){
        console.log("true")
    }
}

checkPalidrome("madam")

//Explanation create a function take string and take variable output then make loop start loop from last to first

// Task3. Count Vowels and Consonants

let text = "programming";
let vowels = 0;
let consonants = 0;

for (let i = 0; i < text.length; i++) {
    let ch = text[i];

    if ("aeiouAEIOU".includes(ch)) {
        vowels = vowels + 1;
    } else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
        consonants = consonants + 1;
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


// EXPLANATION: make a function countVowCons in string variable
// inside the function take 2 variable create 1 list of vowel small & capital then after that make loop to check if the string is present in list then increase the vowel count otherwise increase the consonent count and print the result

// Task4. Find Second Largest Distinct Number

let arr = [10, 5, 20, 8, 20];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

if (secondLargest === -Infinity) {
    console.log("Second largest number does not exist");
} else {
    console.log("Second Largest:", secondLargest);
}

// EXPLANATION: make a function secLargest in list variable
// inside the function take 3 variable smallest, highest, sechighest then make loop to check if the list is greater than highest then assign highest to sechighest and assign list[i] to highest otherwise check if list[i] is less than highest and greater than sechighest then assign list[i] to sechighest and print the result


// Task5. Remove Duplicates Without Using Set

let numbers = [1,2,2,3,1];
let result = [];

for (let i = 0; i < numbers.length; i++) {
    let duplicate = false;

    for (let j = 0; j < result.length; j++) {
        if (numbers[i] === result[j]) {
            duplicate = true;
            break;
        }
    }

    if (duplicate === false) {
        result[result.length] = numbers[i];
    }
}

console.log("Array without duplicates:", result);

// EXPLANATION: make a function removeDuplicates in list variable
// inside the function take newList variable then make loop to check if newList does not include list[i] then push list[i] to newList and print the result


// Task6. Sum of Even Numbers

let nums = [10, 15, 20, 25, 30];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        sum = sum + nums[i];
    }
}

console.log("Sum of Even Numbers:", sum);

// EXPLANATION: make a function sumOfEven in list variable
// inside the function take sum variable then make loop to check if list[i] is even then add list[i] to sum and print the result


// Task7. Find Frequency of Each Element

let values = [1, 2, 2, 3, 3, 3, 4];

for (let i = 0; i < values.length; i++) {
    let alreadyCounted = false;

    for (let k = 0; k < i; k++) {
        if (values[i] === values[k]) {
            alreadyCounted = true;
            break;
        }
    }

    if (alreadyCounted === false) {
        let count = 0;

        for (let j = 0; j < values.length; j++) {
            if (values[i] === values[j]) {
                count = count + 1;
            }
        }

        console.log(values[i] + " occurs " + count + " times");
    }
}

// EXPLANATION: make a function findfrequency in list variable
// inside the function take frequency variable then make loop to check if frequency[list[i]] is true then increment frequency[list[i]] by 1 otherwise assign 1 to frequency[list[i]] and print the result  


// Task8. Check Anagrams

let str1 = "listen";
let str2 = "silent";

let isAnagram = true;

if (str1.length !== str2.length) {
    isAnagram = false;
} else {
    let checked = [];

    for (let i = 0; i < str1.length; i++) {
        let found = false;

        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j] && checked[j] !== true) {
                checked[j] = true;
                found = true;
                break;
            }
        }

        if (found === false) {
            isAnagram = false;
            break;
        }
    }
}

if (isAnagram === true) {
    console.log("Anagrams");
} else {
    console.log("Not Anagrams");
}

// EXPLANATION: Create a function checkAnagram with declare 2 inbuilt variable str1 & str2
// Firstly check both string length use of if - else condition if length equal then check next condition with firstly split then sort then join and compare str2 with same process else not anagram


// Task9. Move All Zeros to the End

let array = [0, 1, 0, 3, 12];
let resultArray = [];
let zeroCount = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        zeroCount = zeroCount + 1;
    } else {
        resultArray[resultArray.length] = array[i];
    }
}

for (let i = 0; i < zeroCount; i++) {
    resultArray[resultArray.length] = 0;
}

console.log("Array after moving zeros:", resultArray);

// EXPLANATION: Create a function zeroMove with declare 1 inbuilt variable arr
// Firstly take 2 variable count & newlist then make loop to check if arr[i] is equal to 0 then increment count by 1 and remove the element from arr and push 0 to newlist then print the result with concat method 