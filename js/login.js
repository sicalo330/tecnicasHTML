const getElements = async () => {
    //Estos son los datos de login
    const response = await fetch('./data/login_info.json');
    const data = await response.json();
    const formInfo = data[0];
    //Estos son los datos de usuarios
    const user = await fetch("./data/users.json");
    const dataUser = await user.json();

    const contenedor = document.querySelector(".pos");

    sessionStorage.setItem('datosLogin', JSON.stringify(dataUser));

    contenedor.innerHTML = `
    <div class="link-menu">
    <div class="container">
        <div class="login-box">
            <h2 class="h2">${formInfo.login}</h2>
            <form action="" method="post" id="1">
                <div class="input-box">
                    <input type="text" id="usuario" required>
                    <label>${formInfo.Email}</label>
                </div>
                <div class="input-box">
                    <input type="password" id="contrasenia" required>
                    <label>${formInfo.Password}</label>
                </div>
                <div class="forgot-password">
                    <a href="#">${formInfo.ForgetPassword}</a>
                </div>
                <button type="submit" class="btn">${formInfo.login}</button>
                <div class="signup-link">
                    <a href="#">${formInfo.Signup}</a>
                </div>
            </form>
        </div>
    </div>
    </div>
    `;

    // Escuchar el evento "submit" en el formulario
    const formulario = document.querySelector("form");
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.querySelector("#usuario").value;
        const password = document.querySelector("#contrasenia").value;

        const login =JSON.parse(sessionStorage.getItem("datosLogin"));
        //Verifica si el usuario existe
        const usuarioEncontrado = login.find((usuario) => usuario.user === user && usuario.password === password);
        const rol = usuarioEncontrado.user;
        sessionStorage.setItem('rol', rol);
        const rolUsuario = sessionStorage.getItem('rol');
        if(rolUsuario == "admin"){
            window.location.href = "index.html"
        }
        else if(rolUsuario == "user"){
            console.log("Hola usuario, solo el administrador puede entrar al index.html");
        }
        else{
            console.log("datos incorrectos");
            console.error("Datos incorrectos")
        }
    });
};

getElements();
