let horas = 0;
let minutos = 0;
let segundos = 0;
let cronometro;

function iniciarCronometro() {
    cronometro = setInterval(actualizarCronometro, 1000);
}

function pausarCronometro() {
    clearInterval(cronometro);
}

function reiniciarCronometro() {
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;
    actualizarInterfaz();
}

function actualizarCronometro() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    actualizarInterfaz();
}

function actualizarInterfaz() {
    //variables
    let formatoHoras;
    let formatoMinutos;
    let formatoSegundos;

    //formato de horas
    if (horas < 10) {
        formatoHoras = "0" + horas;
    } else {
        formatoHoras = horas;
    }

    //formato de minutos
    if (minutos < 10) {
        formatoMinutos = "0" + minutos;
    } else {
        formatoMinutos = minutos;
    }

    //formato de segundos
    if (segundos < 10) {
        formatoSegundos = "0" + segundos;
    } else {
        formatoSegundos = segundos;
    }
    document.getElementById('cronometro').innerText = formatoHoras + ':' + formatoMinutos + ':' + formatoSegundos;
}