import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ titulo }) => {
    const [data, setData] = useState([]);
    const params = useParams();
    const URL_API = 'https://raw.githubusercontent.com/christianjjc/proyecto-final-react-v02/main/src/components/Item/json/tblProductos.json'

    const obtenerDatos = ()=>{
        axios.get(URL_API)
        .then((response)=>{
            const array = response.data;
            let arrayFiltrado = [];
            if (Object.keys(params).length > 0) {
                arrayFiltrado = array.filter((item)=>{
                    return item.idCategoria.some(categoria => categoria.includes(params.idCategoria))
                })
            } else {
                arrayFiltrado = array;
            }
            putArraInLocalS(arrayFiltrado, 'animes');
            setData(arrayFiltrado);
        })
        .catch((err)=>{console.log(err)})
    }

    const putArraInLocalS = (miArray, strNombreArrayObjeto) => {localStorage.setItem(strNombreArrayObjeto, JSON.stringify(miArray))}
    useEffect(()=>{
        obtenerDatos();
    },[params]);

    return (
        <div className='row itemListContainer'>
            <div className="col-12">
                <div className="row">
                    <div className='text-center col-12'>
                        <h1>{`${titulo} ${(Object.keys(params).length>0)?params.idCategoria:''}`}</h1>
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