const palindromes = function (word) {
  word = word.match(/\w/g).join("").toLowerCase();
  let palindrome = [];
  for (let i = word.length - 1; i >= 0; i--) {
    palindrome.push(word[i]);
  }
  if (palindrome.join("") === word) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
