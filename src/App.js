import NavBar from './NavBar/NavBar';
import ContainerAll from './ContainerAll/ContainerAll';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import React from 'react';

function App() {

   return (

   

        <>
          <ContainerAll>
            <NavBar />
            <ItemListContainer greeting='Mi Catálogo de Productos' />
          </ContainerAll>
        </>
    

/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  ); 
}

export default App;
