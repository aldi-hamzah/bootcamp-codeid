/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
  if(isNaN(start,end)){
    return `${start} or ${end} harus dalam angka`;
  }
  const percentage = Math.floor((end/start)*100)-100;
  if(percentage >= 100){
    return `Total kenaikan income ${percentage}%`;
  } else {
    return `Total penurunan income ${percentage}%`;
  }
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%

