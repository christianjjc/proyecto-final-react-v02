import NavBar from './components/NavBar/NavBar'
import ContainerAll from './components/ContainerAll/ContainerAll';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';

const App = () => {
   return (
        <>
          <ContainerAll> 
            <NavBar />
            <ItemListContainer  greeting='Mi Catálogo de Productos' />
          </ContainerAll>
        </>
  ); 
}

export default App;
