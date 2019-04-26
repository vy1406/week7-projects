class AutoCompleteTrie {

    constructor(value) {
        this.value = value
        this.children = {};
        this.endOfWord = false;
    }
    addWord(word) {
        if (!this.children[word[0]]) {
            this.children[word[0]] = new AutoCompleteTrie(word[0]);
            if (word.length === 1)
                this.children[word[0]].endWord = true;
        }
        if (word.length > 1)
            this.children[word[0]].addWord(word.slice(1))
    }
    findWord(word) {
        if (this.children[word] && word.length == 1) 
            return this.children[word[0]].value == word ? true : false
        else 
           return this.children[word[0]] ? this.children[word[0]].findWord(word.slice(1)) : false   
    }

    
}

autoCompleteTrie = new AutoCompleteTrie()
autoCompleteTrie.addWord("running")
autoCompleteTrie.addWord("runs")
console.log(autoCompleteTrie.findWord("aruns"))
// console.log(autoCompleteTrie.children.r)