//   FizzBuzz HW assignment 

function fizzBuzz() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) { //  could also be if (i%15 == 0)
            console.log("FizzBuzz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz())

function evenTillnoMod() {
    for (i = 0; i <= 50; i += 2) {
        console.log(i)
    }
}
evenTillnoMod()

function evenTill() {
    for (i = 0; i <= 50; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
evenTill()

function oddTill() {
    for (i = 0; i <= 13; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

oddTill()

myArray = ["Bob", "John", "Carlos", "Jim"]

function callAll() {
    for (i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
    }
}

callAll()

var myNewArray = [];

function addInt(x, y, z) {
    myNewArray.push(x, y, z);
    console.log(myNewArray)
}

addInt(5, 3, 1)


// ALGOS Notes


var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

function getPositives() {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            countPositives++;
        }
    }
    console.log("there are " + countPositives + " positive values");
}
getPositives();

//  Is the Array a Palindrome?

function isPal(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            return "Not a palindrome!";
        }
    }
    return "Palindrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);


// Swap variables 

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// Reverse an array

var x = ["a", "b", "c", "d", "e"];

console.log(x.reverse());

function reverseArr(array) {
    var temp = [];
    for (var i = array.length - 1; i >= 0; i--) {
        temp.push(array[i]);
    }
    return temp;
}

var a = [3, 5, 7, 8]
var b = reverseArr(a);
console.log(b)

// MATH Library

var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log(floor);
console.log(ceiling);
console.log(random);

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

var x = random(1, 10);
console.log(x)

// Flatten an array

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
