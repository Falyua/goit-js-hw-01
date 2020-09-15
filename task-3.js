const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Введите свой пороль");

if (message === ADMIN_PASSWORD) {
  console.log("Добро пожаловать!");
} else if (!message) {
  console.log("Отменено пользователем!");
} else {
  console.log("Доступ запрещен, неверный пароль!");
}

alert(message);