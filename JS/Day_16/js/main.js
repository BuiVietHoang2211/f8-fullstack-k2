/* 
Bài 1 : Hoán vị 2 số
Input: Cho trước 2 số a, b

Output: Thực hiện hoán vị 2 số không dùng biến trung gian
*/

var a = 2;
var b = 3;

a = a + b;
b = a - b;
a = a - b; 

console.log(`${a} ${b}`);

// End bài 1

/* 
Bài 2 : Thực hiện phép toán 
S = 10 + 20 + 5^10 / 2
*/

var s = ( 10 + 20 + 5**10) / 2;
console.log(s);

//  End bài 2 

/* 
# Bài 3: Tìm số lớn nhất

Input:
Cho trước 3 số a, b, c

Output:
Tìm số lớn nhất trong 3 số và hiển thị kết quả
*/
var a = 1, b = 2, c = 3;

var max = a;

if( b > max) {
    max = b 
}if( c > max) {
    max = c;
}

console.log(max);

// End bài 3

/* 
# Bài 4: Kiểm tra số cùng dấu

Input:
Cho trước 2 số a, b

Output:
Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
*/

var a = 1;
var b = 2;

if((a > 0 && b > 0) || (a < 0 && b < 0)) {
    console.log(`Hai số cùng dấu`);
}else {
    console.log(` Khác dấu`);
}

/* 
# Bài 5: Sắp xếp 3 số
Input:
Cho trước 3 số a, b, c

Output:
Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần
*/


var a = 3;
var b = 1;
var c = 2;


if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}

if (b > c) {
    let temp = b;
    b = c;
    c = temp;
}

if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}

console.log(`${a} ${b} ${c}`);

