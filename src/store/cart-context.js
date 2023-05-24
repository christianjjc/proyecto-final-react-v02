import { createContext, useState } from "react";

const CartContext = createContext({
    productos: [],
    addProduct: ()=>{}
});

export default CartContext;

export const CartContextProvider = ({ children }) => {
    const [ productosLista, setProductosLista ] = useState([]);

    const addProduct = (producto)=>{
        setProductosLista([producto, ...productosLista]);
    } 

    return (
        <CartContext.Provider value={{
            productos: productosLista,
            addProduct: addProduct
        }}>
            { children }
        </CartContext.Provider>
    );
};