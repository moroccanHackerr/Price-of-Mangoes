function mango(quantity, price) {
  return Math.ceil(quantity - quantity / 3) * price
}
console.log(mango(12,3));
