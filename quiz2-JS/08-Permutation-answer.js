const checkPermute = function(stringOne, stringTwo) {
  stringOne = stringOne.split('').sort().join('');
  stringTwo = stringTwo.split('').sort().join('');

  if(stringOne.length !== stringTwo.length){
    return false;
  } else if(stringOne === stringTwo){
    return true;
  }

  return false;
};


console.log(checkPermute('aba', 'aab'))//true;
console.log(checkPermute('aba', 'aaba'))//false;
console.log(checkPermute('aba', 'aa'))//false;