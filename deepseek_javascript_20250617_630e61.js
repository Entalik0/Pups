// Инициализация WebApp Telegram
const tg = window.Telegram.WebApp;

// Показываем кнопку "Закрыть"
tg.MainButton.show();
tg.MainButton.setText("Close App");
tg.MainButton.onClick(() => tg.close());

// Функция отправки данных в Telegram
function sendData() {
    tg.sendData("Hello from MiniApp!");
}