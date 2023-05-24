const getLocalSoragePutInArray = (strNombreObjLS) => {
    return JSON.parse(localStorage.getItem(strNombreObjLS)) || [];
}

export default getLocalSoragePutInArray;