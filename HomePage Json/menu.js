fetch('menu.json')
    .then((response) => response.json())
    .then((json) => {
        crearMenu("menu", json);
        for (const key in json)
            if (json.hasOwnProperty(key))
                agregarOpciones(json[key][0].toLowerCase(), json[key]);
        
    });

function crearMenu(id, json){
    const biomas = json;
    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            const firstElement = json[key][0];
            const txt = document.createTextNode(firstElement)
            const element = document.getElementById(id);
            const lista = document.createElement("li");
            const a = document.createElement("a");
            a.setAttribute("href", "https://minecraft.fandom.com/es/wiki/" + firstElement.replace(" ", "_"));
            a.setAttribute("target", "_blank");
            a.appendChild(txt);
            lista.setAttribute("class", "option-nav");
            lista.setAttribute("id", firstElement.toLowerCase());
            lista.appendChild(a);
            element.appendChild(lista);
        }
    }
}

function agregarOpciones(id, opciones) {
    const element = document.getElementById(id);
    const ulista = document.createElement("ul");
    const img = document.createElement("img");
    img.setAttribute("src", opciones[1]);
    img.setAttribute("class", ".fullscreen-img");
    ulista.appendChild(img);
    crearLista(ulista, opciones[2]);
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