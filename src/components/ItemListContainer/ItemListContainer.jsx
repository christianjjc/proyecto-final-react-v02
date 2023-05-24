import React, { useState, useEffect, useContext } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import putArrayInLocalS from '../../helpers/putArrayInLocalS';
import CartContext from '../../store/cart-context';


const ItemListContainer = ({ titulo }) => {
    const [data, setData] = useState([]);
    const { idCategoria } = useParams();
    const cartCtx = useContext(CartContext);

    const URL_API = 'https://raw.githubusercontent.com/christianjjc/proyecto-final-react-v02/main/src/components/Item/json/tblProductos.json'
    const obtenerDatos = ()=>{
        axios.get(URL_API)
        .then((response)=>{
            const array = response.data;
            let arrayFiltrado = [];
            if (idCategoria) {
                arrayFiltrado = array.filter((item)=>{
                    return item.idCategoria.some(categoria => categoria.includes(idCategoria))
                })
            } else {
                arrayFiltrado = array;
            }
            putArrayInLocalS(arrayFiltrado, 'animes');
            setData(arrayFiltrado);
        })
        .catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
        console.log(cartCtx.productos);
    },[])

    useEffect(()=>{
        obtenerDatos();
    },[idCategoria]);

    return (
        <div className='row itemListContainer'>
            <div className="col-12">
                <div className="row">
                    <div className='text-center col-12'>
                        <h1>{`${titulo} ${idCategoria || ''}`}</h1>
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