function atualizarHora() {
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");
    const segundos = String(agora.getSeconds()).padStart(2, "0");

    const horario = `${horas}:${minutos}:${segundos}`;
    document.getElementById("clock").textContent = horario;
}

// Atualiza imediatamente e depois a cada 1 segundo
atualizarHora();
setInterval(atualizarHora, 1000);
``