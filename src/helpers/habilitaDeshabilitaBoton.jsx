const habilitaDeshabilitaBoton = (miBoton, habTrueDesHabFalse)=>{
    if (habTrueDesHabFalse){
        miBoton.setAttribute('disabled', true);
    }else{
        miBoton.removeAttribute('disabled');
    }
}

export default habilitaDeshabilitaBoton;