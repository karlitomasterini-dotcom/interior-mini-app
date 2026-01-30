let tg = window.Telegram.WebApp;
tg.ready();

function sendForm() {
    alert("КНОПКА НАЖАЛАСЬ ✅");

    let data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        area: document.getElementById("area").value
    };

    alert("ДАННЫЕ СОБРАНЫ ✅");

    tg.sendData(JSON.stringify(data));

    alert("ДАННЫЕ ОТПРАВЛЕНЫ В TELEGRAM ✅");

    tg.close();
}
