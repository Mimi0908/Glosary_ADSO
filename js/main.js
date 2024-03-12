let posActual=0;
let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
}