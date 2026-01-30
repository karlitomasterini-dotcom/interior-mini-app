let tg = window.Telegram.WebApp;
tg.ready();

function sendForm() {
    let data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        area: document.getElementById("area").value
    };

    tg.sendData(JSON.stringify(data));  // Отправка данных в Telegram

    tg.close();  // Закрытие мини-приложения
}
