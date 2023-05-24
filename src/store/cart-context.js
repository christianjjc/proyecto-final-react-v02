import { createContext, useState } from "react";

const CartContext = createContext({
    productos: [],
    addProduct: ()=>{},
    removeProduct: ()=>{}
});

export default CartContext;

export const CartContextProvider = ({ children }) => {
    const [ productosLista, setProductosLista ] = useState([]);

    const addProduct = (producto, cantidadPedida)=>{
        const nuevoArray = {cantidad: cantidadPedida, ...producto};
        //setProductosLista([producto, ...productosLista]);
        setProductosLista([nuevoArray, ...productosLista]);
    }

    const removeProduct = (id) => {
        const nuevoArray = productosLista.filter(i => i.id !== id);
        setProductosLista(nuevoArray);
    }

    return (
        <CartContext.Provider value={{
            productos: productosLista,
            addProduct: addProduct,
            removeProduct: removeProduct
        }}>
            { children }
        </CartContext.Provider>
    );
};