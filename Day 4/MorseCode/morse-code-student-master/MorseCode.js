const BSTree = require('./BinarySearch')
const alphabet = require('./alphabet')

class ScoreTree extends BSTree {
    constructor(value, score) {
        super(value)
        this.score = score
    }
    insertNode(key, score) { //this function inserts a letter into the morse code tree - this should run once in the beginning
        if (!this.value) {
            this.value = key
            this.score = score
        }
        else if (score > this.score && this.rightChild) {
            this.rightChild.insertNode(key, score)
        }
        else if (score <= this.score && this.leftChild) {
            this.leftChild.insertNode(key, score)
        }
        else if (score <= this.score) {
            this.leftChild = new ScoreTree(key, score)
        }
        else {
            this.rightChild = new ScoreTree(key, score)
        }
    }

    findLetter(letter) {
        let score = alphabet[letter]

        if (this.value == letter)
            return ""

        else if (score > this.score && this.rightChild)
            return "-" + this.rightChild.findLetter(letter)

        else if (score <= this.score && this.leftChild)
            return "." + this.leftChild.findLetter(letter)

    }
    translateWord(word) {
        let result = ""
        for (let i = 0; i < word.length; i++) {
            let curLetter = word[i].toUpperCase()
            if (curLetter == " ") {
                result += " / "
                continue
            }
            result += this.findLetter(curLetter) + " "
        }
        console.log(result)
    }
    getLetterByMorse(morse) {
        if (morse.length == 1) {
            if (morse == ".")
                return this.leftChild.value
            else
                return this.rightChild.value
        }

        else if (morse[0] == "-")
            return this.rightChild.getLetterByMorse(morse.slice(1))
        else if (morse[0] == ".")
            return this.leftChild.getLetterByMorse(morse.slice(1))
    }
    translateMorse(morseCode) {
        const morseToArray = morseCode.split(" ")
        let result = ""
        for (let i = 0; i < morseToArray.length; i++) {
            let curLetter = morseToArray[i]
            
            if (curLetter == "/") {
                result += " "
            }
            else {
                result += this.getLetterByMorse(curLetter)
            }
        }
        console.log(result)
    }
}
//initializing the MorseCode tree
const morseCode = new ScoreTree("TOP", 50)
Object.keys(alphabet).forEach(l => {
    morseCode.insertNode(l, alphabet[l])
})

morseCode.translateWord("welcome")
morseCode.translateWord("elevation is cool")
morseCode.translateMorse("... --- ...")
morseCode.translateMorse("-. .. -.-. . / .--- --- -... / --- -. / - .... . / .-.. . ... ... --- -.")
