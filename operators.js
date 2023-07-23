// + - / = *

// D = ((L - S) / L) * 100;

sPrice = 199;
lPrice = 799;

discount = ((lPrice - sPrice) / lPrice) * 100;

console.log("Discount percentage is " + discount);

displayDiscount = Math.round(discount);
console.log(displayDiscount)

result = lPrice > sPrice;

console.log(typeof result);