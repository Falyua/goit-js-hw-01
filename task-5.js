let delivery = prompt("Укажите страну получателя");
console.log(delivery);
let cost;
delivery = (delivery + "").toLowerCase();

switch (delivery) {
  case "китай":
    cost = 100;
    console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
    break;

  case "чили":
    cost = 250;
    console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
    break;

  case "австралия":
    cost = 170;
    console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
    break;

  case "индия":
    cost = 80;
    console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
    break;

  case "ямайка":
    cost = 120;
    console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
    break;

  default:
    console.log(`В вашей стране доставка не доступна`);
}