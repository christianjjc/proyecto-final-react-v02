import { getLocalSoragePutInArray } from "./utilitarios";

const cargaCantidadPedida = (idEnviado)=>{
    const productosCarrito = getLocalSoragePutInArray('productosCarrito');
    //console.log(productosCarrito);
    const nuevoArray = productosCarrito.find((item2) => item2.id === idEnviado);
    if (nuevoArray && nuevoArray.cantidad) {
        //console.log('se imprime nuevo array encointrado');   
        //console.log(nuevoArray);
        console.log(nuevoArray.cantidad);
        return nuevoArray.cantidad;
    }
}

export default cargaCantidadPedida;