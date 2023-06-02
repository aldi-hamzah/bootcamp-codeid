/** buat segitiga  */ 

let iteration = 4
for (let i = 0; i < 6; i++) {
  let str = '';
  for(let j = 1; j<=iteration; j++){
    str += `${j} `;
  }
  console.log(str);
  iteration--;
} 

// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 
iteration = 5;
let num = 0;
for (let i = 0; i < 6; i++) {
  let str = '';
  num = iteration;
  for(let j = 1; j<=iteration; j++){
    str += `${num} `;
    num--;
  }
  console.log(str);
  iteration--;
}  

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  
