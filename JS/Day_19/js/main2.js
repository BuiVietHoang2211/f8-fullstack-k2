/*
# Bài 02
Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”
*/

function findMinMaxAndIndices(array) {
  if (array.length === 0) {
    return null;
  }

  let min = array[0];
  let max = array[0];
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
  }

  return {
    min: {
      value: min,
      index: minIndex,
    },
    max: {
      value: max,
      index: maxIndex,
    },
  };
}

var numbers = [1, 2, 3, 4, 5];

var { min, max } = findMinMaxAndIndices(numbers);

console.log(`Số nhỏ nhất là ${min.value}, tại vị trí ${min.index}`);
console.log(`Số lớn nhất là ${max.value}, tại vị trí ${max.index}`);
