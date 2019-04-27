
autoCompleteTrie = new AutoCompleteTrie()
autoCompleteTrie.addWord("running")
autoCompleteTrie.addWord("runs")
autoCompleteTrie.addWord("the")
autoCompleteTrie.addWord("there")
autoCompleteTrie.addWord("their")
// console.log(autoCompleteTrie.findWord("runs"))
// console.log(autoCompleteTrie.children.r.children.u)

console.log(autoCompleteTrie.predictWord(""))

$("#autoPredicter").on("input", function () {
    let word = $(this).val()
    const $customList = $("#custom_list")
    $customList.empty()
    const words = autoCompleteTrie.predictWord(word)
    console.log(words)
    for (let i = 0; i < words.length; i++) {
        let $curOption = $(`<option value="${words[i]}">`)
        $customList.append($curOption)
    }
    
})

