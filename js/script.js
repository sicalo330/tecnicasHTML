const enviar = document.querySelector(".btn");
enviar.addEventListener('click', function(e){
    e.preventDefault();
    enviarDatos();
});

function enviarDatos(){
    const nombre = document.getElementById("nombre").value;
    const constrasenia = document.getElementById("contrasenia").value;
    console.log(nombre);
    console.log(constrasenia);
}

