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
                this.children[word[0]].endOfWord = true;
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

    // ------------------------------
    // googled it.. :< 
    // couldnt find an answer
    // ------------------------------
    predictWord(string) {
        let getRemainingTree = function (string, tree) {
            let node = tree;
            while (string) {
                if (node.children[string[0]]) {
                    node = node.children[string[0]];
                }
                string = string.substr(1);
            }
            return node;
        };

        let allWords = [];

        let allWordsHelper = function (stringSoFar, tree) {
            for (let k in tree.children) {
                const child = tree.children[k]
                let newString = stringSoFar + child.value;
                if (child.endOfWord) {
                    allWords.push(newString);
                }
                allWordsHelper(newString, child);
            }
        };

        let remainingTree = getRemainingTree(string, this);
        if (remainingTree) {
            allWordsHelper(string, remainingTree);
        }
        return allWords;
    }
}
