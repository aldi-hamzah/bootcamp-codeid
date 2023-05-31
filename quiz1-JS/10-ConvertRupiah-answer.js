/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
  if(type == ''){
    return `No match type currency`;
  }
  let rupiah = 0;
  if(type === 'yen'){
    rupiah = money * 130.12;
  } else if(type === 'usd'){
    rupiah = money * 14382.5;
  } else if(type === 'euro'){
    rupiah = money * 16000;
  }
  rupiah = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(rupiah);
  return `${money} ${type} = ${rupiah}`;
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency