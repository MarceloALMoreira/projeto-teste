function calcularHoras() {
    // Obtém os valores digitados pelo usuário
    const valorHora = parseFloat(document.getElementById('valor-hora').value.replace(',sss', '.'));
    const horaChegada = document.getElementById('hora-chegada').valueAsDate;
    const horaSaida = document.getElementById('hora-saida').valueAsDate;

    const duracaoIntervalo = document.getElementById('duracao-intervalo').valueAsDate;

    // Calcula o total de horas trabalhadas
    const intervalo = duracaoIntervalo ? duracaoIntervalo.getMinutes() / 60 : 0;
    const totalHorasTrabalhadas = (horaSaida.getHours() + (horaSaida.getMinutes() / 60)) - (horaChegada.getHours() + (horaChegada.getMinutes() / 60)) - intervalo;

    // Calcula o valor a receber
    const valorReceber = totalHorasTrabalhadas * valorHora;

    // Exibe o resultado na tela
    document.getElementById('horas-trabalhadas').innerHTML = totalHorasTrabalhadas.toFixed(2).replace('.', ',') + ' horas';
    document.getElementById('valor-receber').innerHTML = valorReceber.toFixed(2).replace('.', ',');

}

function limparValores() {
    document.getElementById("valor-hora").value = "";
    document.getElementById("hora-chegada").value = "";
    document.getElementById("hora-saida").value = "";
    document.getElementById("hora-intervalo").value = "";
    document.getElementById("duracao-intervalo").value = "";
    document.getElementById("horas-trabalhadas").innerText = "";
    document.getElementById("valor-receber").innerText = "";
}

function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('claro');
    body.classList.toggle('escuro');
}
