import React, { useState, useEffect, useContext } from 'react';
import imgMas from 'bootstrap-icons/icons/plus.svg';
import imgMenos from 'bootstrap-icons/icons/dash.svg';
import { habilitaDeshabilitaBoton, putArrayInLocalS } from '../../helpers/utilitarios'
import CartContext from '../../store/cart-context';

const BtnAregarCarrito = ({ item, cantidad }) => {
    const cartCtx = useContext(CartContext);

    const handleOnAdd = ()=>{
        cartCtx.addProduct(item, cantidad);
        alert(`¡${cantidad} Ítem(s) "${item?.titulo}" Agregado(s)!`);
    }

    useEffect(()=>{
        console.log('exece')
        console.log(cartCtx);
    },[cartCtx])

    return (
        <>
            <button id={`idBtnAgrega-${item?.id}`} className="btn btn-primary btn-block w-100" onClick={handleOnAdd}>Agregar al carrito</button>
        </>
    );
};

const ItemCount = ({ item }) => {
    const [contador, setContador] = useState(0);
    const id = `idBtnAgrega-${item?.id}`;

    useEffect(() => {
        habilitaDeshabilitaBoton(id, contador?false:true);
    }, [contador])

    const handleRestaContador = (event) => {
        if (contador > 0) {
            event.preventDefault();
            setContador(contador - 1);
        }
    }

    const handleSumaContador = (event) => {
        if (contador < item?.stock) {
            event.preventDefault();
            setContador(contador + 1);
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <a href="#" onClick={handleRestaContador}>
                                <img src={imgMenos} alt="Restar" />
                            </a>
                            <h3 className="text-center">{contador}</h3>
                            <a href="#" onClick={handleSumaContador}>
                                <img src={imgMas} alt="Sumar" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <BtnAregarCarrito item={item} cantidad={contador} />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ItemCount;