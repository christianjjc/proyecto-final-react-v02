import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ContainerAll from './components/ContainerAll/ContainerAll';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemContainer from './components/ItemContainer/ItemContainer';
import Cart from './components/Cart/Cart';
import React from 'react';

const App = () => {
    return (
        <>
            <ContainerAll>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer titulo='Mi Catálogo de Productos' />} />
                    <Route path='/category/:idCategoria' element={<ItemListContainer titulo='Categoría N°: ' />} />
                    <Route path='/item/:id' element={<ItemContainer />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </ContainerAll>
        </>
    );
}

export default App;