// degişkenleri tanımlama

//var let,const

//let const
//const ==> const değiştilemez
//let sayi1 = 2;
//const sayi2 = 5;

//sayi1 = sayi1 + 5;

//console.log(sayi1);

let sayilar = [1, 5, 9, 8];
console.log(sayilar);

let sayilar2 = new Array();
console.log(sayilar2);

// for (let i = 0; i < sayilar.length; i++) {
//   console.log(sayilar[i]);
// }

//sayilar.forEach((element) => console.log(element));
//sayilar.forEach((element) => sayilar2.push(element + 3));
sayilar2 = sayilar.map((element) => element + 4);
console.log(sayilar2);
// arrayin sonuna veri ekleme
sayilar2.push(258);
console.log(sayilar2);
// arrayin başına veri ekleme
sayilar2.unshift(258);
console.log(sayilar2);
// arrayin sonundan veri silme
sayilar2.pop();
console.log(sayilar2);
// arrayin başından veri silme
sayilar2.shift();
console.log(sayilar2);
// splice metodu

// 0dan itibaren arraydeki 3 elamanı siler
//sayilar2.splice(0, 3);
//console.log(sayilar2);
// 0dan itibaren arraydeki 3 elamanı siler daha sonra yazdıklarımız ekler
// sayilar2.splice(0, 3, 36, 48);
// console.log(sayilar2);
//console.log(sayilar2.splice(1, 2));

// slice metodu
//  slice orjinal arrayi değiştirmiyor fakat splice orjinal arrayi değiştiryor
// let sayilar3 = sayilar2.slice(2);
// console.log(sayilar3);
// let sayilar3 = sayilar2.slice(1, 3);
// console.log(sayilar3);
let sayilar4 = sayilar2.filter((element) => element > 10);
console.log(sayilar4);
let sayi1 = sayilar2.find((element) => element === 13);
console.log(sayi1);
console.log(sayilar2.indexOf(5));
let sonuc = sayilar2.some((element) => element > 12);
console.log(sonuc);
let sonuc2 = sayilar2.every((element) => element > 4);
console.log(sonuc2);
