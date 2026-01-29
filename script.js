let tg = window.Telegram.WebApp;
tg.expand();

function sendForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let area = document.getElementById("area").value;

    if (!name || !phone || !area) {
        alert("Пожалуйста, заполните все поля");
        return;
    }

    let data = {
        name: name,
        phone: phone,
        area: area
    };

    tg.sendData(JSON.stringify(data));
}
