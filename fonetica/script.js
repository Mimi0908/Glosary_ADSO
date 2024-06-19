// Audio
let audio = document.getElementById("miAudio");


//cargo en un arreglo las imganes de las banderas. Este sera el orden que se mostrarán
let fonetica = ["foot.png", "word.png", "hot.png", "cat.png", "sheep.png",
    "dance.png", "development.png", "code.png", "update.png", "firmware.png",
    "software.png", "try.png", "backend.png", "ship.png", "javascript.png",
    "python.png", "chair.png", "virtual.png", "programmer.png", "inheritance.png",
    "adjustment.png","AI.png","API.png", ""];// hay X posiciones

let preguntasActivas = [true, true, true, true, true,
    true, true, true, true, true,
    true, true, true, true, true,
    true, true, true, true, true,
    true,true,true
] //como será aleatorio, crearemos un array donde se guardará si esa posición ya ha salidoeeeeeeeeeeeeeeeeeeer  

//arreglo que guardara la opcion correcta
let correcta = [
    0, 1, 2, 1, 0,
    0, 2, 1, 2, 0,
    1, 0, 1, 2, 0,
    1, 2, 0, 2, 1,
    2, 1, 0, ]; // es un array de X posiciones

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["fʊt", "fuːd", "fæt"]);
opciones.push(["wɜːld", "wɜːd", "wɪð"]);
opciones.push(["hʌt", "hɒɡ", "hɒt"]);
opciones.push(["kɑː", "kæt", "keɪʤ"]);
opciones.push(["ʃiːp", "ʃɪp", "ʃɪft"]);

opciones.push(["dɑːns", "dɑːnst", "ˈdɑːnsɪŋ"]);
opciones.push(["dɪˈvɛləpə", "ɪnˈvaɪrᵊnmənt", "dɪˈvɛləpmənt"]);
opciones.push(["ˈkəʊdɪŋ", "kəʊd", "ˈkəʊdə"]);
opciones.push(["ʌpˈdeɪtɪŋ", "ˈækʧuəlaɪz", "ʌpˈdeɪt"]);
opciones.push(["ˈfɜːmweə", "ˈhɑːdweə", "ˈsɒftweə"]);

opciones.push(["sɒft", "ˈsɒftweə", "ˈsɒfᵊn"]);
opciones.push(["traɪ", "traɪd", "ˈtraɪɪŋ"]);
opciones.push(["ˌbækˈɛndɪŋ", "ˌbækˈɛnd", "bækt"]);
opciones.push(["sɪk", "ʃiːp", "ʃɪp"]);
opciones.push(["ˈʤɑːvəskrɪpt", "ˈʤɑːvə", "ˈʤɑːvəz"]);

opciones.push(["ˌpaɪrəʊˈtɛknɪks", "ˈpaɪθᵊn", "pyrolysis"])
opciones.push(["ʧeəz", "eə", "ʧeə"])
opciones.push(["ˈvɜːʧuəl", "ˈvɜːʧuː", "juː"])
opciones.push(["ˈprəʊɡræmɪŋ", "ˈprəʊɡræm", "ˈprəʊɡræmə"])
opciones.push(["ɪnˈhɛrɪtᵊns ˈtæksɪz", "ɪnˈhɛrɪtᵊns", "ɪnˈhɛrɪtᵊns tæks"])

opciones.push(["əˈdʒʌstmɛnt", "ædˈʒʌstmənt", "əˈdʒʌstmənt"])
opciones.push(["æɪ ɪ", "eɪ aɪ", "aɪ æ"])
opciones.push(["eɪ piː aɪ", "æp ɪ", "ə piː aɪ"])
opciones.push(["", "", ""])
opciones.push(["", "", ""])

opciones.push(["", "", ""])
opciones.push(["", "", ""])
opciones.push(["", "", ""])
opciones.push(["", "", ""])
opciones.push(["", "", ""])

opciones.push(["", "", ""])
opciones.push(["", "", ""])
opciones.push(["", "", ""])
opciones.push(["", "", ""])
opciones.push(["", "", ""])// Es un array bidimensional de X posiciones

//variable que guarda la posicion actual
let posActual = 0;

//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

//variable que guarda la cantidad que no has acertado hasta el momento
let cantidad_No_Acertadas = 0;

//valor aleatorio para obtener una pregunta
let preguntaAleatoria = Math.floor(Math.random() * 20);

function comenzarJuego() {

    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    cantidad_No_Acertadas = 0;
    
    audio.play();
    

    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";

    //Iniciamos el reloj
    iniciarCronometro();
    cargarFonetica();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarFonetica() {
    //controlo si se acabaron las banderas y le indico que solo apareceran 5 preguntas
    if (6 <= posActual) {
        pausarCronometro();
        terminarJuego();
    }
    else {//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        /* aquí va codigo sobre un número aleatorio para acceder al array y dejamos a "posActual" sin grandes
        modificaciones */

        if (preguntasActivas[preguntaAleatoria] == true) {

            //mover funcionalidad de "posactual" como contador 
            document.getElementById("imgFonetica").src = "IMG/" + fonetica[preguntaAleatoria];
            document.getElementById("n0").innerHTML = opciones[preguntaAleatoria][0];
            document.getElementById("n1").innerHTML = opciones[preguntaAleatoria][1];
            document.getElementById("n2").innerHTML = opciones[preguntaAleatoria][2];

            console.log("en el if" + preguntaAleatoria);

        }
        else {
            //Se repetira hasta que la pregunta sea una que no haya salido
            while (preguntasActivas[preguntaAleatoria] == false) {
                preguntaAleatoria = Math.floor(Math.random() * 20);
                console.log("en el bucle, valor nuevo: " + preguntaAleatoria);
            }

            //y por último, agrego
            document.getElementById("imgFonetica").src = "IMG/" + fonetica[preguntaAleatoria];
            document.getElementById("n0").innerHTML = opciones[preguntaAleatoria][0];
            document.getElementById("n1").innerHTML = opciones[preguntaAleatoria][1];
            document.getElementById("n2").innerHTML = opciones[preguntaAleatoria][2];

            console.log("en el else" + preguntaAleatoria);

        }

    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[preguntaAleatoria]) {//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";


        cantidadAcertadas++;
    } else {//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[preguntaAleatoria]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[preguntaAleatoria]).className = "letra letraAcertada";


        cantidad_No_Acertadas++;
    }

    //Subimos en contador y volvemos a lanzar la pregunta aleatoria
    preguntasActivas[preguntaAleatoria] = false;
    posActual++;
    preguntaAleatoria = Math.floor(Math.random() * 20);

    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarFonetica, 1000);
}
function terminarJuego() {
    //ocultamos las pantallas y mostramos la pantalla final
    //aqui 

    audio.pause();
    audio.currentTime = 0;

    document.getElementById("cronometro").hidden = true;
    let tiempo = document.getElementById("tiempo");

    tiempo.innerText = "You took " + minutos + " Minutes with " + segundos + " Seconds"  ;

    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = cantidad_No_Acertadas;
}

function volverAlInicio() {
    //ocultamos las pantallas y activamos la inicial
    //reiniciamos las preguntas
    for (let index = 0; index < preguntasActivas.length - 1; index++) {
        preguntasActivas[index] = true;
    }
    reiniciarCronometro();
    document.getElementById("cronometro").hidden = false;
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}

//Iniciar el crónometro

let minutos = 0;
let segundos = 0;
let cronometro;

function iniciarCronometro() {
    cronometro = setInterval(actualizarCronometro, 1000);
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
    let formatoMinutos;
    let formatoSegundos;

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
    document.getElementById('cronometro').innerText = formatoMinutos + ':' + formatoSegundos;
}

function reiniciarCronometro() {
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;
    actualizarInterfaz();
}

function pausarCronometro() {
    clearInterval(cronometro);
  }