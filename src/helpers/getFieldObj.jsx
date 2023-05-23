/**  OBTENEMOS EL VALOR DE CUALQUIER PROPIEDAD DE UN ARRAY DE OBJETOS A PARTIR DE ENVIAR UN DATO Y PROPIEDAD BUSCADA */
const getFieldObj = (arrayObjeto, strDatoBuscado, strPropiedadAbuscar, strPropiedadDevolver) => {
    const arrayFind = arrayObjeto.find((arrayFind) => {
        return arrayFind[strPropiedadAbuscar] == strDatoBuscado;
    });
    if (arrayFind) {
        let datoDevolver = arrayFind[strPropiedadDevolver];
        return datoDevolver;
    } else {
        return ``;
    }
}

export default getFieldObj;