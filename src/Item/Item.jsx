import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({ item }) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">

{/*                 <div className="card">
                    <div className="contenedor-img-card">
                        <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.titulo}</h5>
                        <p className="card-text">{item.descShort}</p>
                        <a href="#" id={`btnSeeMore-${item.id}`} className="btn btn-primary">Ver más</a>
                        <p className="card-text">{item.stock}</p>
                    </div>
                    <ItemCount idBtnAgrega={`btnAddCart-${item.id}`} stock={item.stock} inicio={0} />
                </div> */}

                <div className="card bg-light">
                    <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                    <div className="card-body">
                        <h5 className="card-title">{item.titulo}</h5>
                        <p className="card-text">{item.descShort}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-light"><b>Categoría: </b>No Categorizado</li>
                        <li className="list-group-item bg-light"><b>Precio: </b>US$ {item.precio}</li>
                        <li className="list-group-item bg-light"><b>Stock: </b>{item.stock}</li>
                    </ul>
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-8">
                            <ItemCount idBtnAgrega={`btnAddCart-${item.id}`} stock={item.stock} inicio={0} tituloItem={item.titulo} />
{/*                         <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Item;  