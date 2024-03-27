import { glosary } from "./baseDatos.js";
let active = 0;

function cargarTarjeta(active) {
  document.getElementById("title").innerHTML = glosary[active].word;
  document.getElementById("fonetica").innerHTML = glosary[active].phonetic;
  document.getElementById("definition").innerHTML = glosary[active].explain;
  document.getElementById("contador").innerHTML = glosary[active].num;
}

let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.onclick = function () {
    document.getElementById("fonetica").className="fonetica";
    active = (active + 1) % glosary.length;
    cargarTarjeta(active);
};
prev.onclick = function () {
    document.getElementById("fonetica").className="fonetica";
    active = (active - 1 + glosary.length) % glosary.length;
    cargarTarjeta(active);
};

cargarTarjeta(active);

let audio= document.getElementById("audio");

audio.onclick= function(){
    document.getElementById("fonetica").className="fonetica-active";
}