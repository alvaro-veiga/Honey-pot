document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um evento de listener ao formulário
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        // Verifica se o campo honeypot está vazio
        if (document.getElementById("honeypot").value !== "") {
            // Se não estiver vazio, é provável que seja um bot, então bloqueamos o envio do formulário
            event.preventDefault();
            alert("Erro: O formulário foi bloqueado devido a atividade suspeita.");
        }
    });
});