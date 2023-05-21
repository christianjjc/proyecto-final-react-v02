import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    const URL_API = 'https://raw.githubusercontent.com/christianjjc/proyecto-final-react/ft-desafio-03/src/Item/json/tblProductos.json';

    
    const obtenerDatosApi = async () => {
        try {
            const response = await fetch(URL_API);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        obtenerDatosApi();
    },[]);
    
    return (
        <div className='row itemListContainer'>
            <div className="col-12">
                <div className="row">
                    <div className='text-center col-12'>
                        <h1>{greeting}</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div  className='col-12'>
                        <ItemList item={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;