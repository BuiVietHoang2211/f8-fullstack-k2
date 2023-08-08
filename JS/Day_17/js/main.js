//  Bài 1 : Tính giá tiền taxi

function tienCuoc(soKm) {
  var giaTien;

  if (soKm <= 1) {
    giaTien = 15000;
  } else if (soKm <= 5) {
    var giaTien = 13500;
  } else {
    giaTien = 11000;
  }

  var tongTien = giaTien * soKm;

  if (soKm > 120) {
    tongTien *= 0.9;
  }
  return tongTien;
}

var soKm = 121;
var tongTien = tienCuoc(soKm);

console.log(` Tiền cước taxi khi đi ${soKm} km là : ${tongTien}`);

// Bài 3 : Tính giá trị biểu thức : Cho trước số nguyên n. S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

function giaTriBieuThuc(n) {
  var S = (n * (n + 1) * (n + 2)) / 3;
  return S;
}

var n = 2;

var ketQua = giaTriBieuThuc(n);
console.log(` Giá trị biểu thức là : ${ketQua}`);

//  Bài 4: Viết hàm kiểm tra số nguyên tố

function soNguyenTo(n) {
  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

let number = 12345;
if (soNguyenTo(number)) {
  console.log(`${number} là số nguyên tố.`);
} else {
  console.log(`${number} không phải là số nguyên tố.`);
}

/* 
# Bài 8: Tính giá trị biểu thức không dùng vòng lặp
Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N

*/

var n = 2;

function calculateSeriesSum(n) {
  if (n === 1) {
    return 1;
  } else {
    return 1 / n + calculateSeriesSum(n - 1);
  }
}

var sum = calculateSeriesSum(n);
console.log(`Giá trị của biểu thức là: ${sum}`);

// Bài 5
// function drawNumberTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }

// const n = parseInt(prompt("Nhập số dòng: "));
// drawNumberTriangle(n);

//  Bài 2 :

var kWh = 111;
var fee = 0;
if (kWh > 0) {
  if (kWh < 51) {
    fee += (kWh - 0) * 1.678;
  } else if (kWh < 100) {
    fee += 50 * 1.678 + (kWh - 50) * 1.734;
  } else if (kWh < 200) {
    fee += 50 * 1.678 + 50 * 1.734 + (kWh - 100) * 2.014;
  } else if (kWh < 300) {
    fee += 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (kWh - 200) * 2.536;
  } else if (kWh < 400) {
    fee +=
      50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + (kWh - 200) * 2.834;
  } else {
    fee +=
      50 * 1.678 +
      50 * 1.734 +
      100 * 2.014 +
      100 * 2.536 +
      100 * 2.834 +
      (kWh - 400) * 2.927;
  }
  console.log(`Electric fee: ${fee}`);
}

//  Bài 6

const board = document.querySelector(".board");

for (let rows = 0; rows < 8; rows++) {
  let boxColor;
  let boxStartColorWhite = rows % 2 === 0 ? true : false;

  for (let columns = 0; columns < 8; columns++) {
    if (boxStartColorWhite) boxColor = columns % 2 === 0 ? "white" : "black";
    else boxColor = columns % 2 === 0 ? "black" : "white";

    const box = document.createElement("div");
    box.style.width = board.clientWidth / 8 + "px";
    box.style.height = board.clientHeight / 8 + "px";
    box.style.backgroundColor = boxColor;

    board.append(box);
  }
}
