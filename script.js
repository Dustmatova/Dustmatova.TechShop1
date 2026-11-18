console.log("JavaScript подключён!");
document.querySelector("#buy").addEventListener("click", function() {
    document.querySelector("#message").textContent = 
        "Товар добавлен в корзину!";
});
document.querySelector("#details").addEventListener("click", function() {
    document.querySelector("#info").textContent = 
        "Гарантия: 12 месяцев. Подключение: Bluetooth.";
});
