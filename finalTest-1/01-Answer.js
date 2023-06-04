// x = posisi awal, y=target posisi, k= jarak temputh satu kali lompatan
function totalLompat(x,y,k){
  return Math.ceil((y - x) / k);
}

console.log(totalLompat(10,85,30));