fetch('menu.json')
    .then((response) => response.json())
    .then((json) => {
        agregarOpciones("Comida", json.Comida);
        agregarOpciones("Pastel", json.Pastel);
        agregarOpciones("Postre", json.Postre);
        agregarOpciones("Bocadillos", json.Bocadillos);
        agregarOpciones("Bebidas", json.Bebidas);
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