/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
  if(isNaN(+seconds)){
    return `${seconds} is not number`;
  }
  const hari = Math.floor(seconds/86400);
  const jam = Math.floor((seconds % 86400) / 3600);
  const menit = Math.floor(((seconds % 86400) % 3600) /60);
  const detik = Math.floor(((seconds % 86400) % 3600) %60);
  return `${hari} hari ${jam} jam ${menit} menit ${detik} detik`
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik