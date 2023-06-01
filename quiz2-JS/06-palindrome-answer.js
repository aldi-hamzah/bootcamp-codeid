
function isPalindrome(word){
  const reversedWord = word.toLowerCase().split('').reverse().join('')
  if(word.toLowerCase() === reversedWord){
    return true;
  }
  return false;
}

console.log(isPalindrome('kasur ini rUsak'));//true