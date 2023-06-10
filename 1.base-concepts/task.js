"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b * b - 4 * a * c;
  let root1, root2;
  if (d === 0) {
	  root1 = -b / (2 * a);
	  arr.push(root1);
  } else if (d > 0) {
	  root1 = (-b + Math.sqrt(d)) / (2 * a);
	  root2 = (-b - Math.sqrt(d)) / (2 * a);
	  arr.push(root1, root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let n = countMonths;
  let payment = S * (P + (P / (Math.pow((1 + P), n) - 1)));
  let debtAmount = (payment * countMonths).toFixed(2);
  return (Number(debtAmount));
}