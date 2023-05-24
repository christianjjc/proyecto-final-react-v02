import { createContext, useState } from "react";
import { putArrayInLocalS, getLocalSoragePutInArray } from "../helpers/utilitarios";

const CartContext = createContext({
    productos: [],
    addProducto: ()=>{},
    removeProducto: ()=>{},
    clearProductos: ()=>{},
    getCartQuantity: ()=>{},
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

    return (
        <CartContext.Provider value={{
            productos: productosLista,
            addProducto,
            removeProducto,
            clearProductos,
            getCartQuantity,
        }}>
            { children }
        </CartContext.Provider>
    );
};