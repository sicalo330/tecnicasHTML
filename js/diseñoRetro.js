const getRetro = async() =>{
    const data = await fetch("./data/diseñoRetro.json");
    const elements = await data.json();
    let articulo2 = document.querySelector(".articulo2");

    elements.forEach((element) => {
        articulo2.innerHTML += `
        <li>"${element.descripcionJuego}"</li>
        <img src="./Imagenes/${element.imagen}.jpg">
        <img src="./GIFS/${element.gif}.gif">
        <img src="./GIFS/${element.gif}.gif">
        `
    });
}

getRetro()