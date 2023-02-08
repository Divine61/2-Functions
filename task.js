// Задание 1
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i of arr) {
    if (i > max) {
        max = i;
    }
    if (i < min) {
        min = i;
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
  if (arr === ``) {
    return 0;
  } else {
    const initialValue = 0;
    const sumWithInitial = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    let sum = sumWithInitial;
    return sum;
  } 
}

function differenceMaxMinWorker(...arr) {
  if (arr === ``) {
    return 0;
  } else {
    let min = arr[0];
    let max = arr[0];
    for (let i of arr) {
      if (i > max) {
          max = i;
      }
      if (i < min) {
          min = i;
      }
    }
    return (max - min);
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr === ``) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i of arr) {
      if (i % 2 === 0) {
        sumEvenElement += i;
      } else {
        sumOddElement += i;
      }
    }
    return (sumEvenElement - sumOddElement);
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr === ``) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i of arr) {
      if (i % 2 === 0) {
        sumEvenElement += i;
        countEvenElement += 1;
      }
    }
    return (sumEvenElement / countEvenElement);
  }
}

// Задание 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let workerResults = [];
  let intermediateWorkerResult = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    for (let j = 0; j < arrOfArr[i].length; j++) {
      intermediateWorkerResult.push(arrOfArr[i][j]);
      if (intermediateWorkerResult.length === arrOfArr[i].length) {
        workerResults.push(func(...intermediateWorkerResult));
        intermediateWorkerResult = [];
      }
    }
  }
  for (let i of workerResults) {
    if (i > maxWorkerResult) {
      maxWorkerResult = i;
    }
  }
  return maxWorkerResult;
}