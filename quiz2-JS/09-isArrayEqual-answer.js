function isArraysEqual(arrayA, arrayB) {
  arrayA = arrayA.join('');
  arrayB = arrayB.join('');
  if(arrayA === arrayB){
    return true;
  }
  return false;
}

const fruitNamesA = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesB = ['rambutan', 'durian', 'jeruk', 'nangka'];
const fruitNamesC = ['anggur', 'apel', 'mangga', 'alpukat'];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false