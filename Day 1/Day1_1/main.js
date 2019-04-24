
/*

// Exercise 6
Write a different implementation of findDuplicates(arr) that runs in O( n ).
It should print "there is a duplicate" if there are any duplicates in the array arr

*/

const someArray = ["cars3", "ab", "Thanos", "aaab", "lol", "chuck norris",
    "nelson mandela", "mandela nelson", "lol", "chuck norris",
    "chuck norris", "chuck norris"]

const wordCounter = {
    words: []
}

const findDuplicates = function (arr) {

    // O(1)
    for (let i = 0; i < arr.length; i++) {
        curElem = arr[i]
        if (wordCounter.words[curElem] == undefined)
            wordCounter.words[curElem] = 1
        else
            wordCounter.words[curElem]++
    }

    // O(1)
    for (let elem in wordCounter.words)
        if (wordCounter.words[elem] > 1) {
            console.log("there is a duplicate")
            return
        }
}

findDuplicates(someArray)


// Exercise 7
/* 
_id     |name   |age    |salary
--------------------------------
ax01    |Ray    |28     |1300
qs84    |Lucius |31     |840
bg33    |Taylor |18     |2700

You need to decide how you're going to store this data, such that the function findEmployeeSalary(employeeID) 
runs in O( 1 ) - constant time
Then, of course, write the findEmployeeSalary(employeeID) function.

*/

const w1 = {
    _id: "ax01",
    name: "Ray",
    age: "28",
    salary: "1300"
}
const w2 = {
    _id: "qs84",
    name: "Lucius",
    age: "31",
    salary: "840"
}
const w3 = {
    _id: "bg33",
    name: "Taylor",
    age: "18",
    salary: "2700"
}

// const workerObject = {
//     workers = [w1,w2,w3]  
// }

const findEmployeeSalary = function (argID) {
    return workerObject.arrIDs[argID]
}

// Exercise 8
// find in O(logn)
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

//recursion
const findNumberByID_recursion = function (argNumbers, argNumber) {
    const curI = Math.round(argNumbers.length / 2)
    if (argNumbers[curI] == argNumber){
        return numbers.indexOf(argNumber)
    }
    if (argNumbers[curI] < argNumber) {        
        return findNumberByID_recursion(argNumbers.slice(curI + 1, argNumbers.length), argNumber)
    }
    if (argNumbers[curI] > argNumber) {
        return findNumberByID_recursion(argNumbers.slice(0, curI), argNumber)
    }
}

const ex8 = findNumberByID_recursion(numbers, 2630)
console.log("recursion: " + ex8)


// not recursion
const findNumberById = function ( argNumbers, argNumber){
    let arr = argNumbers
    let pivot = 0
    let left_i = 0
    let right_i = argNumbers.length - 1
    while (left_i <= right_i){
        pivot = Math.round((left_i + right_i) / 2)
        console.log(`pivot : ${pivot}`)
        if ( argNumbers[pivot] == argNumber)
            return pivot
        
        if ( argNumbers[pivot] > argNumber){
            right_i = pivot  - 1
            console.log(`argNumbers[pivot] : ${argNumbers[pivot]} ? ${argNumber}, right_i : ${right_i}`)
        }
        else {
            left_i = pivot + 1
            console.log(`argNumbers[pivot] : ${argNumbers[pivot]} ? ${argNumber}, left_i : ${left_i}`)
        }
    }
    return -1 // not found
}

console.log("not recursion: " + findNumberById(numbers, 2630))