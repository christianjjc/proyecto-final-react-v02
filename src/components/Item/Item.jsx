import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className="card bg-light mb-2">
                    <img src={item?.imagen} className="card-img-top" alt={item?.titulo} />
                    <div className="card-body">
                        <h5 className="card-title">{item?.titulo}</h5>
                        <p className="card-text">{item?.descShort}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-light"><Link to={`/item/${item?.id}`}>Ver Detalle</Link></li>
                        <li className="list-group-item bg-light"><b>Categoría: </b>No Categorizado</li>
                        <li className="list-group-item bg-light"><b>Precio: </b>US$ {item?.precio}</li>
                        <li className="list-group-item bg-light"><b>Stock: </b>{item?.stock}</li>
                    </ul>
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;