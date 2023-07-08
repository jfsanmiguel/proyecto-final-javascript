let contacto= document.getElementById("formulario");
contacto.addEventListener("submit", envioForm);
function envioForm(e){
    e.preventDefault();
    console.log("Formulario enviado");
    let form=e.target;
    for(let i=0;i<6;i++){
        console.log(form.children[i].value);
    }
    
}
