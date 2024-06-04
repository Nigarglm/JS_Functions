// Task1

function sumBetweenNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return;
    }
    
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let sum = 0;
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
}

console.log(sumBetweenNumbers(1, 10)); 

// Task2

function isAnagram(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return;
    }
    
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('save', 'vase'));

// Task3

function sumOfNumbers(arr) {
    if (!Array.isArray(arr)) {
        return;
    }
    
    let sum = 0;
    
    for (let num of arr) {
        if (typeof num === 'number') {
            sum += num;
        }
    }
    
    return sum;
}

console.log(sumOfNumbers([5, 10, 15, 20, 25, 'a', 'b'])); 

//Task4

function longestWord(sentence) {
    if (typeof sentence !== 'string') {
        return;
    }
    
    const words = sentence.split(' ');
    let longest = '';
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
}

console.log(longestWord('Muellim mene 100 bal veriinnn'));



