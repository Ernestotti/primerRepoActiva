//Sustituye un parrafo por otro con el haciendo referencia al id.
let parrafoJano = document.querySelector("#parrafo3");
parrafoJano.textContent = "cambios en el parrafo"
console.log(parrafoJano);

//Sustituye un elemetno de una lista por otro haciendo referencia al id.
let segundoLi = document.querySelector("#segundoElementoLista");
segundoLi.textContent = "Emilia";

//Crear un elemento en una lista.
const nuevoLi = document.createElement("li");
nuevoLi.textContent = "Esther";
const lista = document.querySelector("#listaObjetivo");
lista.appendChild(nuevoLi);

//Eliminamos el anterior elemento de la lista.
nuevoLi.textContent = "";

//Crear un enlace en el elemento li(<li><a href="http://www.google.es">Ir a Google</a></li>).
const enlace = document.createElement("a");
enlace.textContent = "Ir a Google";

//Una forma de hacerlo//enlace.href = "http://www.google.es";
enlace.setAttribute("href", "http://www.google.es");
nuevoLi.appendChild(enlace);

//Modificar todos los parrafos haciendo referencia a <p>.
const parrafos = document.querySelectorAll("p");
parrafos.forEach(function(element){
    element.textContent = "Xarxatec Activa";
})

//Modificar el primer elemento con la clase .parrafo.
const parrafos = document.querySelector(".parrafo");
console.log(parrafos);

//modificar todos los elementos de la clases .parrafo.
const parrafos = document.querySelectorAll(".parrafo");
parrafos.forEach(function(element){
    element.textContent = "Xarxatec Activa";
})