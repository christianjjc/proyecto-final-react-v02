import { createContext, useState } from "react";
import { putArrayInLocalS, getLocalSoragePutInArray, clearLocalStorage } from "../helpers/utilitarios";

const CartContext = createContext({
    productos: [],
    addProducto: ()=>{},
    removeProducto: ()=>{},
    clearProductos: ()=>{},
    getCartQuantity: ()=>{},
    getCartPrice: ()=>{},
});

export default CartContext;

export const CartContextProvider = ({ children }) => {
    const [ productosLista, setProductosLista ] = useState(getLocalSoragePutInArray('productosCarrito'));

    const addProducto = (producto, cantidadPedida)=>{
        const nuevoProducto = {cantidad: cantidadPedida, ...producto};
        const nuevoArray = [nuevoProducto, ...productosLista.filter((item) => item.id !== producto.id)];
        putArrayInLocalS(nuevoArray, 'productosCarrito');
        setProductosLista(nuevoArray);
    }

    const removeProducto = (producto) => {
        const nuevoArray = productosLista.filter((item) => item.id !== producto.id);
        setProductosLista(nuevoArray);
    }

    const clearProductos = () => {
        const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar todos los Items de tu carrito de compras?');
        if (confirmacion) {
            clearLocalStorage('productosCarrito');
            setProductosLista([]);
            //console.log('Todos los productos del carrito han sido eliminados.');
            return true;
        } else {
            return false;
        }
    }

    const getCartQuantity = ()=>{
        const cartQuantity = productosLista.reduce((acumulador, array)=>{
            return acumulador + array.cantidad
        },0);
        return cartQuantity;
    }

    const getCartPrice = ()=>{
        const cartPrice = productosLista.reduce((acumulador, array)=>{
            return acumulador + (array.cantidad * array.precio);
        },0);
        return cartPrice;
    }

    return (
        <CartContext.Provider value={{
            productos: productosLista,
            addProducto,
            removeProducto,
            clearProductos,
            getCartQuantity,
            getCartPrice,
        }}>
            { children }
        </CartContext.Provider>
    );
};