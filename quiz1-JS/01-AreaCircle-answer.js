/** 
  Diketahui rumus area = pi * radius * radius dimana pi = 3.14159, r = radius buat function dengan nama getAreaCircle(r)
  Output Contraint : 
  getAreaCircle('-1'); //return radius -1 <= 0, try higher
  getAreaCircle('a');  //return Inputan harus dalam angka
  getAreaCircle(5);    //retun 78.53975
 */

function getAreaCircle(r) {
  const rad = +r;
  if (isNaN(rad)) {
    return 'Inputan harus dalam angka';
  } else if (rad <= -1) {
    return 'radius -1 <= 0, try higher';
  }
  const area = Math.PI * rad * rad;
  return area;
}

console.log(getAreaCircle('-1')); //return radius -1 <= 0, try higher
console.log(getAreaCircle('a')); //return Inputan harus dalam angka
console.log(getAreaCircle(5)); //retun 78.53975
