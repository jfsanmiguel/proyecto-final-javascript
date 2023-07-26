const contador=0;
var DateTime=luxon.DateTime;
const now = DateTime.now();
function usuario(nombre,correo, contraseña) {
    this.nombre = nombre;
    this.correo=correo;
    this.contraseña = contraseña;
}
let user = {
    nombre: "",
    correo:"",
    contraseña: ""
}
const user1 = new usuario("Juan","abc@mail.com", "12345678");
const user2 = new usuario("Felipe","hola@mail.com", "ggabvz");
const user3 = new usuario("David","correo@mail.com", "contraseñapass");
let listaDeUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [user1, user2, user3];
let usuarios=[];
let totalCompra=localStorage.getItem("subtotal") || 0;
let carro=JSON.parse(localStorage.getItem("carrito")) || [];
const pedirUsuarios=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(listaDeUsuarios)
        },1500)
    })
}
const renderUsuarios=(array)=>{
    if(array==null){
        array.push(user1);
        array.push(user2);
        array.push(user3);
    }
    
}
pedirUsuarios().then((res)=>{
    usuarios=res
    renderUsuarios(usuarios)
})

const button = document.getElementById("boton_login");
const perfil = document.querySelector("#sesion");
const date=document.querySelector("#date");
const isAuth=localStorage.getItem("sesion") || false;
if(isAuth){
    perfil.innerHTML = `
                           <div class="main__titulo">
                           <h1> Bienvenido(a) ${localStorage.getItem("user")}</h1>
                           <h2>Su total de compras en el carrito tiene un valor de: $ ${totalCompra}</h2>
                                
                                
                             </div>`
    setInterval(()=>{
        date.innerHTML=`
                <div class="main__registro">
                <h3>Fecha y hora actual</h3>
                <span>año: ${now.year}</span>
                <span>mes: ${now.month}</span>
                <span>día: ${now.day}</span>
                <span>hora: ${now.hour}</span>
                <span>minuto: ${now.minute}</span>
                <span>segundo: ${now.second}</span>
                <span>día de la semana: ${now.weekday}</span>
                </div>`
    },1000)
    
}

const boton = document.getElementById("boton_registro");
const mostrarPerfil = nombreusuario => {
    perfil.innerHTML = `<h1 class="main__titulo"> Bienvenido(a) ${nombreusuario}</h1>
    <h2 class="main__titulo">Su total de compras en el carrito tiene un valor de: $ ${totalCompra}</h2>
    `
    localStorage.setItem("sesion",true);
    localStorage.setItem("user",nombreusuario);
}
const noExiste = () => {
    perfil.innerHTML = `<h1 class="main__titulo">El usuario ingresado no existe</h1> <a href="../pages/sesion.html">Volver</a>`
    
}
button.addEventListener("click", (elemento) => {
    const usuarioexiste = usuarios.find(elemento => elemento.nombre === user.nombre && elemento.contraseña === user.contraseña);
    usuarioexiste ? mostrarPerfil(usuarioexiste.nombre) : noExiste();

})
const nombreNuevo = document.querySelector("#nombreNuevo");
const correoNuevo=document.querySelector("#correoNuevo")
const contraseñaNueva = document.querySelector("#contraseñaNueva");
const inputs = document.querySelectorAll("input");
if(nombreNuevo!=null && correoNuevo!=null && contraseñaNueva!=null){

    boton.addEventListener("click", () => {
        const usern = new usuario(nombreNuevo.value,correoNuevo.value, contraseñaNueva.value);
        usuarios.push(usern);
        console.log(usuarios);
        localStorage.setItem("usuarios",JSON.stringify(usuarios));
        
    })
}


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
