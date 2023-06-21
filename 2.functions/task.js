function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = [...arr].reduce((acc, item, index,arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return Number((acc/arr.length).toFixed(2));
    }
    return acc
  }, 0);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumResult = [...arr].reduce ((acc, item) => acc + item, 0);
  return sumResult;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let difMaxMinResult = Math.max(...arr) - Math.min(...arr);
    return difMaxMinResult;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let summEven = [...arr].reduce((acc, item) => {
    return item % 2 === 0 ? acc + item : acc;
  }, 0);
  let summOdd = [...arr].reduce((acc, item) => {
    return item % 2 !== 0 ? acc + item : acc;
  }, 0);
  let difEvenOddResult = summEven - summOdd;
  return difEvenOddResult;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let evenElements = [...arr].filter(number => number % 2 === 0);
  let summEven = evenElements.reduce((acc, item) => 
      acc + item, 0);
  let summAvgEven = summEven / evenElements.length;
  return summAvgEven;
}

function makeWork (arrOfArr, func) {
  return Math.max(...arrOfArr.map(element => func(...element)));
}
