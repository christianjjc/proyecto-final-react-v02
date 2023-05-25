import { createContext, useState } from "react";
import { putArrayInLocalS, getLocalSoragePutInArray } from "../helpers/utilitarios";

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
        setProductosLista([]);
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