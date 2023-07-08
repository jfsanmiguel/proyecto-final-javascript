const usuario={
    nombre:"",
    contraseña:""
}
const listaDeUsuarios=[];
const button=document.getElementById("boton_login");
button.addEventListener("click",()=>{
    
})
const inputs=document.querySelectorAll("input");
console.log(inputs)

inputs.forEach( (elemento) =>{
    elemento.addEventListener("input",(e)=>{
        console.log(e.target.value)
        if(e.target.name=="usuario"){
           usuario.nombre= e.target.value;
        }
        if(e.target.name==contraseña){
            usuario.contraseña=e.target.value;
        }
    })
})
