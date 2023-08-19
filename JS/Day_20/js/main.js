/*
# Bài 1
Lấy kết quả giao giữa 2 mảng:
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
kết quả [1,2]
*/

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var ketQua = arrA.filter((value) => arrB.includes(value));
console.log(ketQua);

/*
Bài 2 : 
Làm phẳng array sau (Chuyển về mảng 1 chiều)

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
Kết quả

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
*/

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var flattenedArr = arr.flat(Infinity);
console.log(flattenedArr);

/*
# Bài 3
Tách phần tử trong mảng theo đúng kiểu dữ liệu

var arr = [["a", 1, true], ["b", 2, false]]
Kết quả

[["a", "b"], [1, 2], [true, false]]
*/
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
var result = [];

for (var i = 0; i < arr[0].length; i++) {
  result[i] = arr
    .map(function (value) {
      return value[i];
    })
    .filter(function (value) {
      return typeof value === typeof arr[0][i];
    });
}

console.log(result);
