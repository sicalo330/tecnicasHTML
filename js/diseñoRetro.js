const getRetro = async() =>{
    const data = await fetch("./data/diseñoRetro.json");
    const elements = await data.json();
    let articulo2 = document.querySelector(".articulo2");

    elements.forEach(element => {
        articulo2.innerHTML += `
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
}

getRetro()