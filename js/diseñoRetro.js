const getRetro = async() =>{
    const data = await fetch("./data/diseñoRetro.json");
    const elements = await data.json();
    let elemento = document.querySelector(".elemento");

    elements.slice(0,31).forEach(element => {
        elemento.innerHTML += `
        <h1 class="titulo-retro">${element.titulo}</h1>
        <p class="explicacion-retro">${element.explicacion}</p>
        <h3 class="titulo-juego">${element.tituloJuego}</h3>
        <br>
        <ol class="articulo">
            <aside class="contenedor-principal">
            <div class="contenedor-subtitulo">
                <h2 class="subtitulo">${element.subtitulo}</h2>
            </div>
            <div class="contenedor-juego">
                <div class="contenedor-descripcion-img">
                    <img src="./Imagenes/${element.imagen}.jpg" class="ajustar-imagen">
                </div>
                <div class="contenedor-texto">
                    <p class="descripcionJuego">${element.descripcionJuego}</p>
                </div>
            </div>
            </aside>
        </ol>
        `
    });
}

getRetro()