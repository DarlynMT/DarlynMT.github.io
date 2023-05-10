fetch('menu.json')
    .then((response) => response.json())
    .then((json) => {
        agregarOpciones("practica1", json.practica1);
        agregarOpciones("practica2", json.practica2);
        agregarOpciones("practica3", json.practica3);
        agregarOpciones("practica4", json.practica4);
        agregarOpciones("practica5", json.practica5);
        agregarOpciones("practica6", json.practica6);
        agregarOpciones("practica7", json.practica7);
        agregarOpciones("practica8", json.practica8);
    });

function agregarOpciones(id, opciones) {
    const element = document.getElementById(id);
    const ulista = document.createElement("ul");
    const img = document.createElement("img");
    img.setAttribute("src", opciones[0]);
    img.setAttribute("class", ".fullscreen-img");
    ulista.appendChild(img);
    for(const opcion of opciones.slice(1))
        crearLista(ulista, opcion);
        element.appendChild(ulista);
}

function crearLista(elemento, opcion){
    const lista = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    const txt = document.createTextNode(opcion);
    a.appendChild(txt);
    lista.appendChild(a);
    elemento.appendChild(lista);
}