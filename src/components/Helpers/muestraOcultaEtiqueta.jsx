/** DEBEN COLOCAR EL CLASS NAME esconder-etiqueta en el CONTROL O NODO DEL DOM */
const muestraOcultaEtiqueta = (showTrueHideFalse, idEtiquetaHTML)=>{
    if (showTrueHideFalse) {
        document.getElementById(`${idEtiquetaHTML}`).classList.remove('esconder-etiqueta');
    } else {
        document.getElementById(`${idEtiquetaHTML}`).classList.add('esconder-etiqueta');
    }
}

export default muestraOcultaEtiqueta;