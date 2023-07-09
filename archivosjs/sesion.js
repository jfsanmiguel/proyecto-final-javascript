const contador=0;
function usuario(nombre, contraseña) {
    this.nombre = nombre;
    this.contraseña = contraseña;
}
let user = {
    nombre: "",
    contraseña: ""
}
const user1 = new usuario("abc@mail.com", "12345678");
const user2 = new usuario("hola@mail.com", "ggabvz");
const user3 = new usuario("correo@mail.com", "contraseñapass");
let listaDeUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [user1, user2, user3];
const button = document.getElementById("boton_login");
const perfil = document.querySelector("#sesion");
const isAuth=localStorage.getItem("sesion") || false;
if(isAuth){
    perfil.innerHTML = `<h1 class="main__titulo"> Bienvenido(a) ${localStorage.getItem("user")}</h1>`
}

const boton = document.getElementById("boton_registro");
const mostrarPerfil = nombreusuario => {
    perfil.innerHTML = `<h1 class="main__titulo"> Bienvenido(a) ${nombreusuario}</h1>`
    localStorage.setItem("sesion",true);
    localStorage.setItem("user",nombreusuario);
}
const noExiste = () => {
    perfil.innerHTML = `<h1 class="main__titulo">El usuario ingresado no existe</h1> <a href="../pages/sesion.html">Volver</a>`
    
}
button.addEventListener("click", (elemento) => {
    const usuarioexiste = listaDeUsuarios.find(elemento => elemento.nombre === user.nombre && elemento.contraseña === user.contraseña);
    usuarioexiste ? mostrarPerfil(usuarioexiste.nombre) : noExiste();

})
boton.addEventListener("click", () => {
    const usern = new usuario(nombreNuevo.value, contraseñaNueva.value);
    listaDeUsuarios.push(usern);
    console.log(listaDeUsuarios);
    localStorage.setItem("usuarios",JSON.stringify(listaDeUsuarios));
    
})
const nombreNuevo = document.querySelector("#nombreNuevo");
const contraseñaNueva = document.querySelector("#contraseñaNueva");
const inputs = document.querySelectorAll("input");
console.log(inputs)

inputs.forEach((elemento) => {
    elemento.addEventListener("input", (e) => {
        console.log(e.target.value)
        if (e.target.name == "usuario") {
            user.nombre = e.target.value;
        }
        if (e.target.name == "contraseña") {
            user.contraseña = e.target.value;
        }
    })
})
