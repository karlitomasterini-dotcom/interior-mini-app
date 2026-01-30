let tg = window.Telegram.WebApp;
tg.ready();

function sendForm() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const area = document.getElementById("area").value;

    if (!name || !phone) {
        alert("Заполните имя и телефон");
        return;
    }

    const data = {
        name: name,
        phone: phone,
        area: area
    };

    tg.sendData(JSON.stringify(data)); // Отправка данных в Telegram
    tg.close(); // Закрываем мини-приложение
}
