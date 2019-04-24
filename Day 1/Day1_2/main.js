const printStars = function (num) {
    let line = ""
    for (let i = 0; i < num; i++) {
        line += "*"
        console.log(line)
    }
}

const printBackwardsStars = function (num) {
    let line = ""
    for (let i = num; i > 0; i--) {
        line = ""
        for (let j = i; j > 0; j--)
            line += "*"
        console.log(line)
    }
}

const printStarSeries = function (num, series) {
    for (let i = 0; i < series; i++) {
        printStars(num)
        printBackwardsStars(num - 1)
    }
}

const reverse = function (string) {
    let result = ""
    for (let i = string.length - 1; i >= 0; i--)
        result += string[i]
    console.log(result)
}

const isPalindrom = function (string) {
    let flag = true
    const stringNoSpace = string.replace(/\s+/g, '').toLowerCase()
    for (let i = 0; i < stringNoSpace.length; i++) {
        if (stringNoSpace[i] != stringNoSpace[stringNoSpace.length - i - 1]) {
            flag = false
            break
        }
    }
    console.log(flag)
}
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
const encrypt = function (string) {
    let result = ""
    for (let i = 0; i < string.length; i++) {
        let curAlphabetIndex = alphabet.indexOf(string[i])
        alphabet[curAlphabetIndex + 1] == undefined ? result += "a" : result += alphabet[curAlphabetIndex + 1]
    }
    return result
}
const decrypt = function (string) {
    let result = ""
    for (let i = 0; i < string.length; i++) {
        let curAlphabetIndex = alphabet.indexOf(string[i])
        alphabet[curAlphabetIndex - 1] == undefined ? result += "z" : result += alphabet[curAlphabetIndex - 1]
    }

    return result
}
const mergeArrays = function (arr1, arr2) {
    let result = arr1
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i])

    }
    return result
}
const shuffleArray = function (arr) {
    let result = []

    let i = 0
    while (i < arr.length) {
        let random = Math.floor(Math.random() * (arr.length - 1));     // returns a random integer from 0 to arr.length
        if (i != random) {
            result.push(arr[random])
            i++
        }
    }
    return result
}
const jumble = function (arr1, arr2) {
    let result = []
    result = mergeArrays(arr1, arr2)
    result = shuffleArray(result)
    return result
}
const createArrayOfLettersByNumber = function () {
    let result = []
    for (let [letter, number] of Object.entries(rawDist))
        for (let i = 0; i < number; i++)
            result.push(letter)

    return result
}
const getRandomLetter = function (letters) {
    let random = Math.floor(Math.random() * (letters.length - 1))
    return letters[random]
}
const getLetter = function () {
    let letters = createArrayOfLettersByNumber() // ({A:3, B:2, C:1})  ==>  [A, A, A, A, B, B, C]

    return getRandomLetter(letters)
}
const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}


// Ex 1
printStars(5)

// Ex 2
printBackwardsStars(5)

// Ex 3
printStarSeries(5, 3)

// Ex 4
reverse("abcde")

// Ex 5
isPalindrom("Taco Cat")

// Ex 6
console.log(encrypt("cat"))

// Ex 7
console.log(decrypt("dbu"))

// Ex 8 
console.log(jumble(colors, foods))

// Ex 9
console.log(getLetter())
