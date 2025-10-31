// --- CRONÔMETRO DE 15 SEGUNDOS ---
let tempo = 15;
let cronometroInterval;

function iniciarCronometro() {
  clearInterval(cronometroInterval);
  tempo = 15;
  atualizarCronometro();

  cronometroInterval = setInterval(() => {
    tempo--;
    atualizarCronometro();

    if (tempo <= 0) {
      clearInterval(cronometroInterval);
      // Quando o tempo acaba, vai pra próxima pergunta
      if (typeof proximaPergunta === "function") {
        proximaPergunta();
      }
    }
  }, 1000);
}

function atualizarCronometro() {
  const display = document.getElementById("cronometro");
  if (display) display.textContent = `⏱️ ${tempo}s`;
}

function pararCronometro() {
  clearInterval(cronometroInterval);
}
