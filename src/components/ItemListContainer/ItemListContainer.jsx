import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';

const ItemListContainer = ({ titulo }) => {
    const [data, setData] = useState([]);
    //const URL_API = 'https://raw.githubusercontent.com/christianjjc/proyecto-final-react/ft-desafio-03/src/Item/json/tblProductos.json';
    const URL_API = 'https://raw.githubusercontent.com/christianjjc/proyecto-final-react-v02/main/src/components/Item/json/tblProductos.json'
    
    const obtenerDatos = ()=>{
        axios.get(URL_API)
        .then((response)=>{
            const array = response.data;
            putArraInLocalS(array, 'animes');
            setData(array);
        })
        .catch((err)=>{console.log(err)})
    }
    const putArraInLocalS = (miArray, strNombreArrayObjeto) => {localStorage.setItem(strNombreArrayObjeto, JSON.stringify(miArray))}
    useEffect(()=>{
        obtenerDatos();
    },[]);
    return (
        <div className='row itemListContainer'>
            <div className="col-12">
                <div className="row">
                    <div className='text-center col-12'>
                        <h1>{titulo}</h1>
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