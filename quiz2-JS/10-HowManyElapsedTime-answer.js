/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1,year2){
  let manyKabisat = 0;
  while(year1 <= year2){
    if(isKabisat(year1)){
      manyKabisat++;
    }
    year1++;
  }
  return manyKabisat;
}

function isKabisat(year){
  if(year % 4 === 0 && year % 100 != 0){
    return true;
  }
  return false;
}

console.log(howManyKabisat(1997,2021));