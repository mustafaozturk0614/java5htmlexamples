const dogruCevaplar = ["B", "B", "A", "A", "C"];
let puan = 0;
let form = document.querySelector(".quiz-form");
let puanKontrolu = 0;

function answers() {
  let textPuan = document.querySelector(".result");
  textPuan.textContent = "";
  puan = 0;

  if (form.s1.value === dogruCevaplar[0]) {
    puan += 20;
  }
  if (form.s2.value === dogruCevaplar[1]) {
    puan += 20;
  }
  if (form.s3.value === dogruCevaplar[2]) {
    puan += 20;
  }
  if (form.s4.value === dogruCevaplar[3]) {
    puan += 20;
  }
  if (form.s5.value === dogruCevaplar[4]) {
    puan += 20;
  }
  textPuan.textContent = puan;
}
function answers2() {
  let textPuan = document.querySelector(".result");
  textPuan.textContent = "";
  puan = 0;

  const cevaplar = [
    form.s1.value,
    form.s2.value,
    form.s3.value,
    form.s4.value,
    form.s5.value,
  ];
  puan = checkAnswer(cevaplar);
  const animasyon = setInterval(() => {
    textPuan.textContent = puanKontrolu;
    if (puanKontrolu === puan) {
      clearInterval(animasyon);
    } else {
      puanKontrolu++;
    }
  }, 50);
  textPuan.parentElement.parentElement.classList.remove("d-none");
  scrollTo(0, 0);
  clearInterval(timeInterval);
}

function checkAnswer(cevaplar) {
  cevaplar.map((x, index) => {
    if (x === dogruCevaplar[index]) {
      puan += 20;
    }
  });

  return puan;
}
let time = document.querySelector(".time");
let sn = 0;
let dk = 0;
let saat = 0;
function timer() {
  sn += 1;
  if (sn === 60) {
    dk += 1;
    sn = 0;
  }
  if (dk === 60) {
    saat += 1;
    dk = 0;
  }

  time.innerHTML = `Süre :  ${saat} saat - ${dk} dk- ${sn} sn  `;
}

const timeInterval = setInterval(timer, 1000);
