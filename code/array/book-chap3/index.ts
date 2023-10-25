// 1. 创建数组

// 直接声明一个数组
const arr1 = [];

// 使用new 关键字创建一个指定长度的数组
const arrObj = new Array(7);

// 直接使用数组元素传递给构造器，创建数组
const arrC = [1, 3, 5];

// for 循环
for (let index = 0; index < arrC.length; index++) {
  const element = arrC[index];

  console.log('for 循环： element ==>', element);
}

// for in
for (const key in arrC) {
  console.log('key', key);
}

// for of
for (const iterator of arrC) {
  console.log('iterator', iterator);
}

arrC.forEach((c) => {
  console.log('forEach c', c);
});

// 二维与多维数组

const matrixArr: number[][] = [[]];

for (let index = 0; index < 10; index++) {
  matrixArr[index] = [];
  for (let j = 0; j < 5; j++) {
    matrixArr[index][j] = j;
  }
}

console.table(matrixArr);

// 多维数组

const matrix3x3x3: number[][][] = [];

for (let index = 0; index < 3; index++) {
  matrix3x3x3[index] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[index][j] = [];
    for (let m = 0; m < 3; m++) {
      matrix3x3x3[index][j][m] = index + j + m;
    }
  }
}

console.table(matrix3x3x3);
