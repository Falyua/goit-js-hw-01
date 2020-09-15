let credits = 23580;
const pricePerDroid = 3000;
let order = Number(prompt("Какое количество дронов хоите купить?"));

if (order == 0) {
  console.log("Отменено пользователем!");
} else {
  let totalPrice = pricePerDroid * order;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(`Вы купили ${order} дроидов, на счету осталось ${credits - totalPrice}`);
  }
}