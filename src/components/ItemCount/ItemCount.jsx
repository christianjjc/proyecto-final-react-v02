import React, { useState, useEffect } from 'react';
import imgMas from 'bootstrap-icons/icons/plus.svg';
import imgMenos from 'bootstrap-icons/icons/dash.svg';

const BtnAregarCarrito = ({ idBtnAgrega, cantidadItems, tituloItem }) => {
    const handleOnAdd = ()=>{
        alert(`¡${cantidadItems} Ítem(s) "${tituloItem}" Agregado(s)!`);
    }
    return (
        <>
            <button id={idBtnAgrega} className="btn btn-primary btn-block w-100" onClick={handleOnAdd}>Agregar al carrito</button>
        </>
    );
};

const ItemCount = ({ idBtnAgrega, stock, inicio, tituloItem }) => {
    const [contador, setContador] = useState(inicio);

    useEffect(() => {
        if (contador < 1) {
            document.getElementById(idBtnAgrega).disabled = true
        } else {
            document.getElementById(idBtnAgrega).disabled = false;
        }
        return () => {
            //console.log('Eliminado', contador)
        }
    }, [contador])

    const handleRestaContador = (event) => {
        if (contador > 0) {
            event.preventDefault();
            setContador(contador - 1);
        }
    }

    const handleSumaContador = (event) => {
        if (contador < stock) {
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
                        <BtnAregarCarrito idBtnAgrega={idBtnAgrega} cantidadItems={contador} tituloItem={tituloItem} />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ItemCount;