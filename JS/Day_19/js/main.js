// Bài 1 : Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
let numbers = [1, 2, 3, 4, 5];
let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);
let maxIndex = numbers.indexOf(maxNumber);
let minIndex = numbers.indexOf(minNumber);
console.log(
  `Số lớn nhất trong mảng là ${maxNumber} và nó nằm ở vị trí ${maxIndex}`
);
console.log(
  `Số nhỏ nhất trong mảng là ${minNumber} và nó nằm ở vị trí ${minIndex}`
);
