const reverseString = function(word) {
    let i = 0;
    let newWord = '';
    while (i < word.length) {
        newWord += word[word.length - i - 1];
        i++;
    } 
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
