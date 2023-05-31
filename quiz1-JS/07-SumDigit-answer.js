/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n){
  if(n >= 10000){
    return `${n} harus lebih kecil dari 10000`;
  }
  const convertString = n.toString();
  const convertArray = convertString.split('')
  if(convertArray.some(n => isNaN(n))){
    return `${n} is not a number, try again`
  }
  let sum = 0;
  convertArray.forEach(n => sum += +n)
  return sum;
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...