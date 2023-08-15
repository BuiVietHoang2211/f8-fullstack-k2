/*
# Bài 03
Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
*/
var numbers = [1, 2, 3, 4, 5, 6, 1];

function filterArray(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(filterArray(numbers));
