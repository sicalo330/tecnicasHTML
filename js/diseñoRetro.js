const getRetro = async() =>{
    const data = await fetch("./data/diseñoRetro.json");
    const elements = await data.json();
    const retro = await fetch("./data/tituloDisenioRetro.json")
    const tituloRetro = await retro.json();
    let articulo1 = document.querySelector(".articulo1");
    let articulo2 = document.querySelector(".articulo2");
    let articulo3 = document.querySelector(".articulo3");
    let articulo4 = document.querySelector(".articulo4");
    let articulo5 = document.querySelector(".articulo5");
    let articulo6 = document.querySelector(".articulo6");
    let articulo7 = document.querySelector(".articulo7");

    //Castlevania
    elements.slice(0,5).forEach(element => {
        articulo1.innerHTML += `
        <aside class="contenedor-principal">
        <div class="contenedor-subtitulo">
            <h2 class="subtitulo">${element.subtitulo}</h2>
        </div>
        <div class="contenedor-descripcion">
            <img src="./Imagenes/${element.imagen}.jpg">
            <div class="contenedor-texto">
                <p class="descripcionJuego">${element.descripcionJuego}</p>
            </div>
        </div>
        </aside>
        `
    });

    //Celeste
    elements.slice(6,10).forEach(element => {
        articulo2.innerHTML += `
        <aside class="contenedor-principal">
        <div class="contenedor-subtitulo">
            <h2 class="subtitulo">${element.subtitulo}</h2>
        </div>
        <div class="contenedor-descripcion">
            <img src="./Imagenes/${element.imagen}.jpg" class="ajustar-imagen-2">
            <div class="contenedor-texto">
                <p class="descripcionJuego">${element.descripcionJuego}</p>
            </div>
        </div>
        </aside>
        `
    });
    articulo2.innerHTML += `
    <aside class="contenedor-principal">
    <div class="contenedor-subtitulo">
        <h2 class="subtitulo">${elements[10].subtitulo}</h2>
    </div>
    <div class="contenedor-juego">
        <div class="contenedor-descripcion-img">
            <img src="./Imagenes/${elements[10].imagen}.jpg" class="ajustar-imagen">
            <img src="./Imagenes/${elements[10].imagen2}.jpg" class="ajustar-imagen">
            <img src="./Imagenes/${elements[10].imagen3}.jpg" class="ajustar-imagen">
            <img src="./Imagenes/${elements[10].imagen4}.jpg" class="ajustar-imagen">
        </div>
        <div class="contenedor-texto-1">
            <p class="descripcionJuego">${elements[10].descripcionJuego}</p>
        </div>
    </div>
    </aside>
    `

    articulo2.innerHTML += `
    <aside class="contenedor-principal">
    <div class="contenedor-subtitulo">
        <h2 class="subtitulo">${elements[11].subtitulo}</h2>
    </div>
    <div class="contenedor-juego">
        <div class="contenedor-descripcion-img">
            <img src="./Imagenes/${elements[11].imagen}.jpg" class="ajustar-imagen">
            <img src="./Imagenes/${elements[11].imagen2}.jpg" class="ajustar-imagen">
            <img src="./Imagenes/${elements[11].imagen3}.jpg" class="ajustar-imagen">
        </div>
        <div class="contenedor-texto-1">
            <p class="descripcionJuego">${elements[11].descripcionJuego}</p>
        </div>
    </div>
    </aside>
    `
    //Kirby
    elements.slice(12,14).forEach(element => {
        articulo3.innerHTML += `
        <aside class="contenedor-principal">
        <div class="contenedor-subtitulo">
            <h2 class="subtitulo">${element.subtitulo}</h2>
        </div>
        <div class="contenedor-descripcion">
            <img src="./Imagenes/${element.imagen}.jpg" class="ajustar-imagen-2">
            <div class="contenedor-texto">
                <p class="descripcionJuego">${element.descripcionJuego}</p>
            </div>
        </div>
        </aside>
        `
    });

    //Estado de flujo

    elements.slice(14,16).forEach(element =>{
        articulo4.innerHTML += `
        <aside class="contenedor-principal">
        <div class="contenedor-subtitulo">
            <h2 class="subtitulo">${element.subtitulo}</h2>
        </div>
        <div class="contenedor-descripcion">
            <img src="./Imagenes/${element.imagen}.jpg" class="ajustar-imagen-2">
            <div class="contenedor-texto">
                <p class="descripcionJuego">${element.descripcionJuego}</p>
            </div>
        </div>
        </aside>
        `
    });

    articulo4.innerHTML += `
    <aside class="contenedor-principal">
    <div class="contenedor-subtitulo">
        <h2 class="subtitulo">${elements[16].subtitulo}</h2>
    </div>
    <div class="contenedor-juego">
        <div class="contenedor-descripcion-img">
            <img src="./Imagenes/${elements[16].imagen}.jpg" class="ajustar-imagen">
            <img src="./Imagenes/${elements[16].imagen2}.jpg" class="ajustar-imagen">
        </div>
        <div class="contenedor-texto-2">
            <p class="descripcionJuego-3">${elements[16].descripcionJuego}</p>
        </div>
    </div>
    </aside>
    `
    //Recompensar al jugador
    articulo5.innerHTML += `
    <aside class="contenedor-principal">
    <div class="contenedor-subtitulo">
        <h2 class="subtitulo">${elements[17].subtitulo}</h2>
    </div>
    <div class="contenedor-juego">
        <div class="contenedor-descripcion-img">
            <img src="./Imagenes/${elements[17].imagen}.jpg" class="ajustar-imagen">
            <img src="./Imagenes/${elements[17].imagen2}.jpg" class="ajustar-imagen">
        </div>
        <div class="contenedor-texto-2">
            <p class="descripcionJuego-2">${elements[17].descripcionJuego}</p>
        </div>
    </div>
    </aside>
    `
    //Motores y lenguajes
    articulo6.innerHTML += `
    <aside class="contenedor-principal">
    <div class="contenedor-subtitulo">
        <h2 class="subtitulo">${elements[18].subtitulo}</h2>
    </div>
    <div class="contenedor-juego">
        <div class="contenedor-descripcion">
            <img src="./Imagenes/${elements[18].imagen}.jpg" class="ajustar-imagen-1">
        </div>
        <div class="contenedor-texto-2">
            <p class="descripcionJuego-3">${elements[18].descripcionJuego}</p>
        </div>
    </div>
    </aside>
    `
    //Lógica de programación
    elements.slice(19,24).forEach(element =>{
        articulo7.innerHTML += `
        <aside class="contenedor-principal">
        <div class="contenedor-subtitulo">
            <h2 class="subtitulo">${element.subtitulo}</h2>
        </div>
        <div class="contenedor-descripcion">
            <img src="./Imagenes/${element.imagen}.jpg" class="ajustar-imagen-2">
            <div class="contenedor-texto">
                <p class="descripcionJuego">${element.descripcionJuego}</p>
            </div>
        </div>
        </aside>
        `
    });
}

getRetro()