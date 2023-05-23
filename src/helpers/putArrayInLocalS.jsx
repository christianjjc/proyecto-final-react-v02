
const putArrayInLocalS = (miArray, strNombreArrayObjeto) => {
    localStorage.setItem(strNombreArrayObjeto, JSON.stringify(miArray))
}

export default putArrayInLocalS;