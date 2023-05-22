import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
/* import { Link } from 'react-router-dom'; */

const ItemDetail = ({ item }) => {

    const formatearNumero=(num)=>{
        const num2 = parseFloat(num).toFixed(2).toLocaleString("es-PE", {style: "currency", currency: "PEN", });
        return num2;
    }

    return (
        <>
            <div className="row text-center mt-4">
                <h1>Detalle de Producto</h1>
            </div>
            <div className="row  mt-4">
                <div className="col-md-6">
                    <img src={item?.imagen} className="card-img-top img-fluid" alt={item?.titulo} />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="row my-2">
                                <div className="col">
                                    <h2>{item?.titulo}</h2>
                                    <p>{item?.descripcion}</p>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-2">
                                    <p><b>Precio: </b></p>
                                    <p><b>Stock: </b></p>
                                </div>
                                <div className="col-10">
                                    <p>S/ {formatearNumero(item?.precio)}</p>
                                    <p>{item?.stock} unidades</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <ItemCount idBtnAgrega={`btnAddCart-${item?.id}`} stock={item?.stock} inicio={0} tituloItem={item?.titulo} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <hr />
            </div>
        </>
    );
};

export default ItemDetail;






