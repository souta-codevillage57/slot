//スロットの中身を取得
const slot1 = document.getElementById('1');
const slot2 = document.getElementById('2');
const slot3 = document.getElementById('3');
const slot4 = document.getElementById('4');
const slot5 = document.getElementById('5');
const slot6 = document.getElementById('6');
const slot7 = document.getElementById('7');
const slot8 = document.getElementById('8');
const slot9 = document.getElementById('9');
//textContentに数字を入れる
//初期値
let num1 = 0;
let num2 = 0;
let num3 = 0;
//1列目
slot1.textContent = 9;
slot4.textContent = num1;
slot7.textContent = 1;
//2列目
slot2.textContent = 9;
slot5.textContent = num2;
slot8.textContent = 1;
//3列目
slot3.textContent = 9;
slot6.textContent = num3;
slot9.textContent = 1;
//ストップボタン初期値
let count = 0;
//スタートボタンを押す
const startBtn = document.getElementById('start');
let counter1;
let counter2;
let counter3;
startBtn.addEventListener('click', () => {
  stopBtn1.disabled = false;
  stopBtn2.disabled = false;
  stopBtn3.disabled = false;
  count = 0;
  counters(counter1, num1, slot1, slot4, slot7);
  counters(counter2, num2, slot2, slot5, slot8);
  counters(counter3, num3, slot3, slot6, slot9);
  // counter()
});
//スロットが動く
//100msごとに1増えるようにしたい
// const counter = () => {
// counter1 = setInterval(() => {
//   if (num1 === 0) {
//     slot1.textContent = 9;
//     slot4.textContent = num1;
//     slot7.textContent = 1;
//     num1++;
//   } else if (num1 === 9) {
//     slot1.textContent = num1 - 8;
//     slot4.textContent = num1;
//     slot7.textContent = 0;
//     num1 = 0;
//   } else {
//     slot1.textContent = num1 - 1;
//     slot4.textContent = num1;
//     slot7.textContent = num1 + 1;
//     num1++;
//   }
// }, 100);
// counter2 = setInterval(() => {
//   if (num2 === 0) {
//     slot2.textContent = 9;
//     slot5.textContent = num2;
//     slot8.textContent = 1;
//     num2++;
//   } else if (num2 === 9) {
//     slot2.textContent = num2 - 1;
//     slot5.textContent = num2;
//     slot8.textContent = 0;
//     num2 = 0;
//   } else {
//     slot2.textContent = num2 - 1;
//     slot5.textContent = num2;
//     slot8.textContent = num2 + 1;
//     num2++;
//   }
// }, 100);
// counter3 = setInterval(() => {
//   if (num3 === 0) {
//     slot3.textContent = 9;
//     slot6.textContent = num3;
//     slot9.textContent = 1;
//     num3++;
//   } else if (num3 === 9) {
//     slot3.textContent = num3 - 1;
//     slot6.textContent = num3;
//     slot9.textContent = 0;
//     num3 = 0;
//   } else {
//     slot3.textContent = num3 - 1;
//     slot6.textContent = num3;
//     slot9.textContent = num3 + 1;
//     num3++;
//   }
// }, 100);
// }
const counters = (counterNum, num, slotNum1, slotNum2, slotNum3) => {
  counterNum = setInterval(() => {
    if (num === 0) {
      slotNum1.textContent = 9;
      slotNum2.textContent = num;
      slotNum3.textContent = 1;
      num++;
    } else if (num === 9) {
      slotNum1.textContent = num - 1;
      slotNum2.textContent = num;
      slotNum3.textContent = 0;
      num = 0;
    } else {
      slotNum1.textContent = num - 1;
      slotNum2.textContent = num;
      slotNum3.textContent = num + 1;
      num++;
    }
  }, 100);
  console.log(counterNum)
  stop(stopBtn1, counter1);
  stop(stopBtn2, counter2);
  stop(stopBtn3, counter3);
}
const stopBtn1 = document.getElementById('stop1');
const stopBtn2 = document.getElementById('stop2');
const stopBtn3 = document.getElementById('stop3');
//ストップボタンを押す
const stop = (stopBtnNum, counterNum) => {
  stopBtnNum.addEventListener('click', () => {
    console.log(counterNum);
    stopBtnNum.disabled = true;
    clearInterval(counterNum)
    count++;
    if (count === 3) {
      check()
    }
  })
}
// stopBtn1.addEventListener('click', () => {
//   stopBtn1.disabled = true;
//   clearInterval(counter1)
//   count++;
//   if (count === 3) {
//     check()
//   }
// })
// stopBtn2.addEventListener('click', () => {
//   stopBtn2.disabled = true;
//   clearInterval(counter2)
//   count++
//   if (count === 3) {
//     check()
//   }
// })
// stopBtn3.addEventListener('click', () => {
//   stopBtn3.disabled = true;
//   clearInterval(counter3)
//   count++
//   if (count === 3) {
//     check()
//   }
// })
//スロットが止まる
//3つとも押したら判定する
const check = () => {
  if (slot1.textContent === slot2.textContent && slot1.textContent === slot3.textContent ||
    slot3.textContent === slot4.textContent && slot3.textContent === slot5.textContent ||
    slot7.textContent === slot8.textContent && slot7.textContent === slot9.textContent ||
    slot1.textContent === slot5.textContent && slot1.textContent === slot9.textContent ||
    slot7.textContent === slot5.textContent && slot7.textContent === slot3.textContent
  ) {
    return alert('成功!')
  } else {
    return alert('失敗...再挑戦せよ')
  }
}