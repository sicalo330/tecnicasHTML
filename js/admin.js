const getTable = async() => {
    //Esto cargará el json de usuarios
    const users = await fetch('./data/users.json');
    const userElement = await users.json();

    //Esto cargará el json de login
    const login = await fetch('./data/login_info.json');
    const loginElement = await login.json();
    //Esto cargará el json del index
    const index = await fetch('./data/indexElem.json');
    const indexElement = await index.json();
    //Esto cargará el json de diseño retro
    const dis = await fetch('./data/diseñoRetro.json');
    const disElement = await dis.json();
    let user = document.querySelector("#tableDiv");

    let userTable = `
    <table id="tableUser">
        <h1>Tabla de usuarios</h1>
        <thead>
        <tr>
            <th>UserId</th>
            <th>User</th>
            <th>Password</th>
            <th>Rol</th>
        </tr>
    </thead>
    <tbody>
    `

    userElement.forEach(element => {
        userTable += `
        <tr>
            <td>${element.userId}</td>
            <td>${element.user}</td>
            <td>${element.password}</td>
            <td>${element.rol}</td>
        </tr>
        `
    });

    userTable += `
    </tbody>
    </table>
    `


    //Aquí comienza la tabla de login
    let userLogin = `
    <table id="tableLogin">
        <h1>Tabla de login</h1>
        <thead>
        <tr>
            <th>Login</th>
            <th>Email</th>
            <th>Password</th>
            <th>ForgetPassword</th>
            <th>Signup</th>
        </tr>
    </thead>
    <tbody>
    `

    loginElement.forEach(element => {
        userLogin += `
        <tr>
            <td>${element.login}</td>
            <td>${element.email}</td>
            <td>${element.password}</td>
            <td>${element.forgetPassword}</td>
            <td>${element.signup}</td>
        </tr>
        `
    });

    userLogin += `
    </tbody>
    </table>
    `
    //Aquí comienza la tabla de la página principal

    let userIndex = `
    <table id="tableIndex">
        <h1>Tabla de información del index</h1>
        <thead>
        <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Descripcion</th>
            <th>Link</th>
            <th>Clase</th>
        </tr>
    </thead>
    <tbody>
    `

    indexElement.forEach(element => {
        userIndex += `
        <tr>
            <td>${element.title}</td>
            <td>${element.image}</td>
            <td>${element.descripcion}</td>
            <td>${element.link}</td>
            <td>${element.clase}</td>
        </tr>
        `
    });

    userIndex += `
    </tbody>
    </table>
    `

    //Aquí comienza la tabla de diseño retro
    let userDis = `
    <table id="tableDis">
        <h1>Tabla de información del index</h1>
        <thead>
        <tr>
            <th>id</th>
            <th>Título</th>
            <th>Explicación</th>
            <th>Título juego</th>
            <th>Subtítulo</th>
            <th>Descripción juego</th>
            <th>Imagen en formato JPG</th>
        </tr>
    </thead>
    <tbody>
    `

    disElement.forEach(element => {
        userDis += `
        <tr>
            <td>${element.id}</td>
            <td>${element.titulo}</td>
            <td>${element.explicacion}</td>
            <td>${element.tituloJuego}</td>
            <td>${element.subtitulo}</td>
            <td>${element.descripcionJuego}</td>
            <td>${element.imagen}.jpg</td>
        </tr>
        `
    });

    userDis += `
    </tbody>
    </table>
    `

    user.innerHTML = userTable;//Con esto se imprimirá en la vista de la página los datos de la entidad usuario
    user.innerHTML += userLogin;//Añadirá a parte la tabla del login
    user.innerHTML += userIndex;//Añadirá a parte la tabla de información del index
    user.innerHTML += userDis;//Añadirá a parte la tabla de información de diseño retro

    let tableUser = new DataTable('#tableUser',{
    });//Esto permite cargar el data table de la tabla de usuarios
    let tableLogin = new DataTable('#tableLogin',{
    });//Esto permite cargar el data table de la tabla de login
    let tableIndex = new DataTable('#tableIndex',{
    });//Esto permite cargar el data table de la tabla del index
    let tableDis = new DataTable('#tableDis',{
    });


}

getTable();