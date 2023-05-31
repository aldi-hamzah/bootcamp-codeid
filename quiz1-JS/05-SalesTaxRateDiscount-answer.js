 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

function getSalesDiscount(price,tax,discount){
  if(typeof price != 'number' && typeof tax != 'number' && typeof discount != 'number'){
    return 'Price, Tax & Discount harus dalam angka'
  } else if(typeof tax != 'number'){
    return 'Pajak harus dalam angka';
  } else if(typeof price != 'number'){
    return 'Price harus dalam angka';
  }
  const totalDiscount = price*(discount/100)
  const afterDiscount = price-totalDiscount;
  const afterTax = afterDiscount*(tax/100);
  console.log(afterTax)
  const total = afterDiscount+afterTax
  return `\nTotal Sales 	: Rp.${price}\nDiscount (${discount}%) 	: Rp.${totalDiscount}\nPriceAfterDiscount 	: Rp.${afterDiscount}\nPajak (${tax}%) 	: Rp.${afterTax}\nTotalPayment 	: Rp.${total}    `;
}

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10,5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */