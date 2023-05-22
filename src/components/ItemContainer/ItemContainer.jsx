import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const ItemContainer = () => {
    const [ array, setArray ] = useState([]);
    const params = useParams();
    const encuentraItem = (strNombreObjLS, id) => {
        let itemEncontrado = JSON.parse(localStorage.getItem(strNombreObjLS));
        setArray(itemEncontrado.find((item)=>item?.id === id));
    }
    useEffect(()=>{
        encuentraItem('animes', params.id);
    },[]);
    return (
        <div className='row'>
            <ItemDetail item={array} />
        </div>
    );
};

export default ItemContainer;