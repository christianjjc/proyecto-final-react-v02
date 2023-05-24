const habilitaDeshabilitaBoton = (idBoton, habTrueDesHabFalse)=>{
    const boton = document.getElementById(idBoton);
    if (habTrueDesHabFalse){
        boton.setAttribute('disabled', true);
    }else{
        boton.removeAttribute('disabled');
    }
}

export default habilitaDeshabilitaBoton;