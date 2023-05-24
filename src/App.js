import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ContainerAll from './components/ContainerAll/ContainerAll';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React from 'react';
import ItemContainer from './components/ItemContainer/ItemContainer';
import CartContext from './store/cart-context'


const App = () => {
    return (
        <>
            <CartContext.Provider value={{
                productos: [
                    {
                        "id": "mhTRl2SE1FLITy3Us2O5",
                        "titulo": "Trigun",
                        "idCategoria":["0", "1"],
                        "descCategoria":["Todos", "Nuevos"],
                        "descShort": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        "imagen": "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(1).jpg?raw=true",
                        "precio": "455.55",
                        "stock": "1"
                    },
                    {
                        "id": "4CE81u2z5FWc01PGlE9f",
                        "titulo": "Escafloune",
                        "idCategoria":["0", "2"],
                        "descCategoria":["Todos", "Antiguos"],
                        "descShort": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at fringilla sem.",
                        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at fringilla sem. Pellentesque id purus at enim sollicitudin ornare vitae vel orci. Sed cursus lacus felis, vel elementum metus ultricies quis. Donec commodo efficitur leo. Donec sit amet placerat justo. Praesent consequat tempus risus, eget ultrices nisi tempor ac. Ut tincidunt diam quam. Suspendisse at ultrices nunc, ac placerat mauris. Nullam dictum quam at finibus pellentesque.",
                        "imagen": "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(1).png?raw=true",
                        "precio": "515.55",
                        "stock": "11"
                    },
                    {
                        "id": "Rc3GtML312W0p9A6Yuj9",
                        "titulo": "Rurouni Kenshin",
                        "idCategoria":["0", "3"],
                        "descCategoria":["Todos", "De Siempre"],
                        "descShort": "Quisque sodales placerat ante a varius.",
                        "descripcion": "Quisque sodales placerat ante a varius. Integer sed dignissim turpis. Suspendisse quis euismod sapien, vitae aliquam ante. Vivamus ac nibh sem. Suspendisse auctor viverra metus. Quisque mollis pellentesque accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus quis ex sed luctus. Nam id arcu massa. Duis convallis libero ac dui accumsan malesuada. Fusce quam metus, eleifend at felis tristique, vulputate porta mi. Duis arcu erat, sollicitudin vitae condimentum vitae, aliquam vel elit. Vivamus consequat sem velit, id dignissim mauris feugiat sit amet.",
                        "imagen": "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(2).jpg?raw=true",
                        "precio": "154.55",
                        "stock": "24"
                    }
                ]
                }}>
                <ContainerAll>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer titulo='Mi Catálogo de Productos' />} />
                        <Route path='/category/:idCategoria' element={<ItemListContainer titulo='Categoría N°: ' />} />
                        <Route path='/item/:id' element={<ItemContainer />} />
                    </Routes>
                </ContainerAll>
            </CartContext.Provider>
        </>
    );
}

export default App;