function isCharsUnique(string){
  string.split('');
  for(let i = 0; i <string.length ; i++){
    for(let j = 0; j < i; j++){
      if(string[j] === string[i]){
        return false;
      }
    }
  }
  return true;
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false