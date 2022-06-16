//Iterate an array - collect sum of values in array
function sumOfArr(arr) {
    var sum = 0;
    for (var num1 = 0; num1 < arr.length; num1++) {
        sum = sum + arr[num1];
    }
    return sum;
}
result = sumOfArr([1, 2, 3])
console.log(result)
// Sum of even numbers in array 1-1000
function sum_even_numbers() {
    var sum = 0;
    for (var num1 = 1; num1 < 1001; num1++) {
        if (num1 % 2 === 0) {
            sum += num1;
        }
    }
    return sum;
}
result = sum_even_numbers()
console.log(result)
// return an array with all numbers from 1-255
function get_array() {
    var arr = [];
    for (var x = 1; x < 256; x++) {
        arr.push(x)
    }
    return arr;
}
result = get_array()
console.log(result)
// Sum of all odds from 1 to 5000
function sum_odd_5000() {
    var sum = 0;
    for (var x = 1; x < 5001; x++) {
        if (x % 2 == 1) {
            sum += x
        }
    }
    return sum;
}
result = sum_odd_5000();
console.log(result);
// Find the max value in the array
function findMax(arr) {
    var max = arr[0];
    for (var x = 1; x < arr.length; x++) {
        if (max < arr[x]) {
            max = arr[x];
        }
    }
    return max;
}
result = findMax([-3, 4, 5, 8])
console.log(result)
// function that returns the average of the values in the array
function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
result = findAvg([1, 2, 3, 4, 5])
console.log(result)
// return an array of all the odd numbers between 1 - 50
function oddNumbers() {
    var arr = [];
    for (var i = 1; i < 51; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}
result = oddNumbers();
console.log(result);
// function that takes an array and returns the number of values in that array whose value is greater than y
function greaterY(arr, Y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}
result = greaterY([1, 3, 5, 7], 3);
console.log(result)
// function that replaces each value in the array with the original product sqaured 
function squareVal(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
result = squareVal([1, 5, 10, -2]);
console.log(result)
// function that replaces any negative numbers within the array with the value of 0
function noNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
result = noNeg([1, 5, 10, -2]);
console.log(result)
// function that returns a new array that only contains the max, min, and avg values of the original array
function maxMinAvg(arr) {
    var max = arr[0]
    var min = arr[0]
    var sum = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
    return arrnew;
}
result = maxMinAvg([1, 5, 10, -2]);
console.log(result)
// function that will swap the first and last values of any given array
function swap(arr) {
    var temp = arr[0]
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
result = swap([1, 5, 10, -2]);
console.log(result)
// function that results with a random number within the perameters set
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
result = random(0,3);
console.log(result);