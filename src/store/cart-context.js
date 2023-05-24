import { createContext, useState } from "react";
import { putArrayInLocalS, getLocalSoragePutInArray } from "../helpers/utilitarios";

const CartContext = createContext({
    productos: [],
    addProduct: ()=>{},
    removeProduct: ()=>{},
    clearProducts: ()=>{},
    getProduct: ()=>{},
});

export default CartContext;

export const CartContextProvider = ({ children }) => {
    const [ productosLista, setProductosLista ] = useState(getLocalSoragePutInArray('productosCarrito'));

    const addProduct = (producto, cantidadPedida)=>{
        const nuevoProducto = {cantidad: cantidadPedida, ...producto};
        const nuevoArray = [nuevoProducto, ...productosLista.filter((item) => item.id !== producto.id)];
        putArrayInLocalS(nuevoArray, 'productosCarrito');
        setProductosLista(nuevoArray);
    }

    const removeProduct = (producto) => {
        const nuevoArray = productosLista.filter((item) => item.id !== producto.id);
        setProductosLista(nuevoArray);
    }

    const clearProducts = () => {
        setProductosLista([]);
    }

    const getProduct = (id) => {
        const nuevoArray = productosLista.filter((item) => item.id == id);
        return nuevoArray
    }

    return (
        <CartContext.Provider value={{
            productos: productosLista,
            addProduct,
            removeProduct,
            clearProducts,
            getProduct
        }}>
            { children }
        </CartContext.Provider>
    );
};