// Sơ đồ ba khối bài 1:
// 
// Đầu vào:
//      + songaylam : 25
//      + luong1ngay: 100.000
// 
// Xử lý:
//      + Bước 1: Tạo 2 biến cho luong1ngay và songaylam
//      + Bước 2: Tạo biến cho luongNV
//      + Bước 3: Sử dụng công thức tính lương nhân viên là luongNV = luong1ngay*songaylam
//      + Bước 4: In kết quả ra console
// Kết quả:
//      + Lương nhân viên
// 
var luong1ngay = 100.000;
var songaylam = 25;
var luongNV = 0;

luongNV = luong1ngay*songaylam;
console.log("Lương nhân viên là: " + luongNV);

// Sơ đồ ba khối bài 2:
// 
// Đầu vào:
//      + các số thưc lần lượt là 5, 6, 7, -3, -1
//      + sothuc1: 5
//      + sothuc2: 6
//      + sothuc3: 7
//      + sothuc4: -3
//      + sothuc5: -1
// 
// Xử lý:
//      + Bước 1: Tạo 5 biến cho sothuc1, sothuc2, sothuc3, sothuc4, sothuc5
//      + Bước 2: Tạo biến cho giatriTBsothuc
//      + Bước 3: Sử dụng công thức tính giá trị trung bình là giatriTBsothu = (sothuc1+sothuc2+sothuc3+sothuc4+sothuc5)/5
//      + Bước 4: In kết quả ra console
// 
// Kết quả:
//      + Giá trị trung bình của 5 số thực
// 
// 
var sothuc1 = 5;
var sothuc2 = 6;
var sothuc3 = 7;
var sothuc4 = -3;
var sothuc5 = -1;
var giatriTBsothuc;

giatriTBsothuc = (sothuc1+sothuc2+sothuc3+sothuc4+sothuc5)/5;
console.log("Giá trị trung bình của 5 số thực: " + giatriTBsothuc);

// Sơ đồ ba khối bài 3:
// 
// Đầu vào:
//      + usdquydoiVND: 23.500
//      + nguoidungnhapUSD: 3
// 
// Xử lý:
//      + Bước 1: Tạo 2 biến cho usdquydoiVND và nguoidungnhapUSD
//      + Bước 2: Tạo biến cho tienquydoiVND
//      + Bước 3: Sử dụng công thức tính quy đổi USD sang VND là tienquydoiVND = usdquydoiVND*nguoidungnhapUSD
//      + Bước 4: In kết quả ra console
// 
// Kết quả:
//      + Số tiền sau quy đổi từ USD sang VND
// 
var usdquydoiVND = 23.500;
var nguoidungnhapUSD = 3;
var tienquydoiVND;

tienquydoiVND= usdquydoiVND*nguoidungnhapUSD;
console.log("Tiền sau quy đổi từ USD sang VND: " + tienquydoiVND)

// Sơ đồ ba khối bài 4:
// 
// Đầu vào:
//      + chieudai: 10
//      + chieurong: 20
// 
// Xử lý:
//      + Bước 1: Tạo 2 biến cho chieudai và chieurong
//      + Bước 2: Tạo biến cho dientich va chuvi
//      + Bước 3: Sử dụng công thức tính diện tích hình chữ nhât là dientich = chieudai*chieurong
//      + Bước 4: Sử dụng công thức tính chu vi hình chữ nhật là chuvi = (chieudai+chieurong)*2
//      + Bước 5: In kết quả diện tích ra console
//      + Bước 6: In kết quả chu vi ra console
// 
// Kết quả:
//      + Diện tích hình chữ nhật
//      + Chu vi hình chữ nhât
// 

var chieudai = 10;
var chieurong = 20;
var dientich;
var chuvi;

dientich = chieudai*chieurong;
chuvi = (chieudai+chieurong)*2;

console.log("Diện tích: " + dientich)
console.log("Chu vi: "+ chuvi)

// Sơ đồ ba khối bài 5:
// 
// Đầu vào:
//      + so1: 41
//      + so2: 19
// 
// Xử lý:
//      + Bước 1: Tạo 2 biến cho so1 và so2
//      + Bước 2: Tạo 2 biến cho tongso1 và tongso2
//      + Bước 3: Tạo 2 biến tách hàng đơn vi hang_don_vi1 và hang_don_vi2
//      + Bước 4: Tạo 2 biến tách hang chục hang_chuc1 và hang_chuc2
//      + Bước 5: Áp dụng công thức lấy số hàng đơn vị Math.floor(so1%10) và Math.floor(so2%10)
//      + Bước 6: Áp dụng công thức lấy số hàng chục Math.floor(so1/10) và Math.floor(so2/10)
//      + Bước 7: Áp dụng công thức tính tổng cho tongso1 = hang_don_vi1 + hang_chuc1 và tongso2 = hang_don_vi2 + hang_chuc2
//      + Bước 8: In kết quả tổng số 1 ra console
//      + Bước 9: In kết quả tổng số 2 ra console
// 
// Kết quả:
//      + Tổng của 2 ký số Tổng số 1 và Tổng số 2
// 

var so1 = 41;
var so2 = 19;
var tongso1;
var tongso2;

var hang_don_vi1;
var hang_don_vi2;

var hang_chuc1;
var hang_chuc2;

hang_chuc1 = Math.floor(so1/10);
hang_chuc2 = Math.floor(so2/10);

hang_don_vi1 = Math.floor(so1%10);
hang_don_vi2 = Math.floor(so2%10);

tongso1 = hang_don_vi1 + hang_chuc1;
tongso2 = hang_don_vi2 + hang_chuc2;

console.log("Tổng số 1: " + tongso1);
console.log("Tổng số 2: " + tongso2);