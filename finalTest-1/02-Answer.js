const arr = [3,8,9,7,6]
const rotateArray = (array, count) => {
  let str = '';
  let previousArr = [];
  for(let i = 0; i < count; i++){
    previousArr = [...array];
    array.unshift(array[array.length-1]);
    array.pop(array[array.length]); 
    str = `[${previousArr}] => [${array}]`;
    if (i == count-1){
      break;
    }
    console.log(str);
  }
  return str;
}

console.log(rotateArray(arr,3)); 