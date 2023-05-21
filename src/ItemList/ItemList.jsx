import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ item }) => {
    return (
        <div className='row'>
            { item.map((item) => <Item item={item} key={item.id} />) }
        </div>
    );
};

export default ItemList;