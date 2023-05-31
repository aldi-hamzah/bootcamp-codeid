/**
 * konversi fareinheit to kelvin
 * rumus Kelvin = (Fareinheit + 459.67)/1.8
 * 
 */

function fareinheitToKelvin(fareinheit){
  const f = +fareinheit
  if(isNaN(f)){
    return 'Fareinheit must an number';
  }
  const kelvin = Math.round((fareinheit + 459.67)/1.8);
  return `Convert Fareinheit (${f}) to Kelvin = ${kelvin}`;
}

console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280
console.log(fareinheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 811
console.log(fareinheitToKelvin("F")); //Fareinheit must an number