/*
# Bài 04
Cho trước 1 mảng số nguyên và thực hiện các yêu cầu sau

Sắp xếp mảng theo thứ tự tăng dần

Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng

Ví dụ:

var numbers = [5, 1, 9, 8, 10];
var element = 4;
Kết quả hiển thị:

[1, 4, 5, 8, 9, 10]
*/

let numbers = [5, 1, 9, 8, 10];
let element = 4;
let index = 1;
numbers.splice(index, 0, element);
numbers.sort((a, b) => a - b);
console.log(numbers);
