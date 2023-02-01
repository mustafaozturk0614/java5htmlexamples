/*
name
surname
age
username
password
ilgialanlari
harcamalar
adress nesnesi olsun
    -country
    -city



    toplam harcamaları bulan bir fonksiyon yazalım 
    son iki harcamayı getiren fonksiyonu yazalım
    interests 1.indexden itibaren 2 tane deger ekleyen fonksiyonu yazalım 
*/

let user = {
  name: "Mustafa",
  surname: "Özturk",
  age: 35,
  username: "musti",
  password: "123",
  interests: ["sinema", "felsefe", "müzik"],
  expenses: [100, 60, 259, 45, 12],
  address: {
    country: "Türkiye",
    city: "Ankara",
  },
};
console.log(user);
console.log(user.address.city);

function sum() {
  let sum = 0;
  for (let index = 0; index < user.expenses.length; index++) {
    sum += user.expenses[index];
  }
  return sum;
}
let toplam = sum();
console.log(toplam);
console.log(sum());

const toplamHarcama = function () {
  let sum = 0;
  user.expenses.forEach((e) => (sum += e));
  return sum;
};
console.log(toplamHarcama());

function sum2(list) {
  let sum = 0;
  list.forEach((e) => (sum += e));
  return sum;
}

console.log(sum2(user.expenses));
const toplamHarcama2 = () => {
  let sum = 0;
  user.expenses.forEach((e) => (sum += e));
  return sum;
};
console.log(toplamHarcama2());
const toplamHarcama3 = () => {
  let sum = user.expenses.reduce((x, y) => x + y);
  return sum;
};
console.log(toplamHarcama3());

function sonHarcamalar(x) {
  let harcamalar = x.slice(x.length - 2);
  return harcamalar;
}
sonHarcamalar(user.expenses).forEach((x) => console.log(x));

function index1denİtibarenilgiAlaniEkle() {
  user.interests.splice(1, 0, "dans", "kitap");
}
index1denİtibarenilgiAlaniEkle();
//user.interests.forEach((x) => console.log(x));

function index1denİtibarenilgiAlaniEkle2(value) {
  user.interests.splice(1, 0, ...value);
}

let array = ["araba yarısı", "pc", "konsol oyunları"];
let array2 = ["sinema", "tiyatro"];
index1denİtibarenilgiAlaniEkle2(array);
//user.interests.forEach((x) => console.log(x));

let array3 = [...array, ...array2];
console.log(array3);

function login() {
  let username = document.getElementById("username");
  let password = document.getElementById("pswd").value;
  if (username.value === user.username && password === user.password) {
    alert("Giriş Başarılı");
  } else {
    alert("Kullanıcı adı veya Şifre Hatalı");
  }
}

let form = document.querySelector(".loginform");

let login2 = () => {
  console.log(form.username.value);
  console.log(form.password.value);
  if (
    form.username.value === user.username &&
    form.password.value === user.password
  ) {
    alert("Giriş Başarılı");
  } else {
    alert("Kullanıcı adı veya Şifre Hatalı");
  }
};
let form2 = document.forms["loginform2"];
let login3 = (e) => {
  e.preventDefault();

  console.log(form2.username.value);
  console.log(form2.password.value);
  if (
    form2.username.value === user.username &&
    form2.password.value === user.password
  ) {
    alert("Giriş Başarılı");
  } else {
    alert("Kullanıcı adı veya Şifre Hatalı");
  }
};

function login4(e) {
  e.preventDefault();

  if (
    e.target.username.value === user.username &&
    e.target.password.value === user.password
  ) {
    alert("Giriş Başarılı");
  } else {
    alert("Kullanıcı adı veya Şifre Hatalı");
  }
}
form2.addEventListener("submit", login4);
