// Задание 1
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
  }
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  let sum = sumWithInitial;
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  let sum = sumWithInitial;
  return sum; 
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  };
  let min = arr[0];
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num;
    }
  };
  return (max - min);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement += 1;
    }
  }
  return (sumEvenElement / countEvenElement);
}

// Задание 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResults = func(...arrOfArr[i]);
    if (workerResults > maxWorkerResult) {
      maxWorkerResult = workerResults;
    } 
  }
  return maxWorkerResult;
}