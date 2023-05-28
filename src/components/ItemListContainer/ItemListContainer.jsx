import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
//import axios from 'axios';
import { useParams } from 'react-router-dom';
import { putArrayInLocalS } from '../../helpers/utilitarios';

import { db, getAnimesList, insertAnimes, insertarAnimes } from '../../services/firebase/conection';

/* const ItemListContainer = ({ titulo }) => {
    const [data, setData] = useState([]);
    const { idCategoria } = useParams();
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
}; */

/** PRIMERA FORMA DEL FIRESTORE */
/* const ItemListContainer = ({ titulo }) => {
    const [data, setData] = useState([]);
    const { idCategoria } = useParams();

    const obtenerDatos = () => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'animes');
        const q = query(
            itemsCollection,
            where('idCategoria', 'array-contains', idCategoria ? idCategoria : '0'),
            limit(20)
                );
        getDocs(q)
            .then((querySnapshot) => {
                const dataArray = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    dataArray.push({ id: doc.id, ...data });
                });
                putArrayInLocalS(dataArray, 'animes');
                setData(dataArray);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        obtenerDatos();
    }, [idCategoria]);

    return (
        <div className='row itemListContainer'>
            <div className="col-12">
                <div className="row">
                    <div className='text-center col-12'>
                        <h1>{`${titulo} ${idCategoria || ''}`}</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-12'>
                        <ItemList item={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}; */


/** SEGGUNDA FORMA DEL FIRESTORE */
const ItemListContainer = ({ titulo }) => {
    const [data, setData] = useState([]);
    const { idCategoria } = useParams();

    const obtenerDatos = async () => {
        const array = await getAnimesList(db, idCategoria,100);
        putArrayInLocalS(array,'animes')
        setData(array);
    }


    const handleInsertaArray = ()=>{
            insertarAnimes(
                "Trigun",
                ["0", "1"],
                ["Todos", "Nuevos"],
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(1).jpg?raw=true",
                455.55,
                13
            );


            insertarAnimes(
                "Escafloune",
                ["0", "2"],
                ["Todos", "Antiguos"],
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at fringilla sem.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at fringilla sem. Pellentesque id purus at enim sollicitudin ornare vitae vel orci. Sed cursus lacus felis, vel elementum metus ultricies quis. Donec commodo efficitur leo. Donec sit amet placerat justo. Praesent consequat tempus risus, eget ultrices nisi tempor ac. Ut tincidunt diam quam. Suspendisse at ultrices nunc, ac placerat mauris. Nullam dictum quam at finibus pellentesque.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(1).png?raw=true",
                515.55,
                11
            );

            insertarAnimes(
                "Rurouni Kenshin",
                ["0", "3"],
                ["Todos", "De Siempre"],
                "Quisque sodales placerat ante a varius.",
                "Quisque sodales placerat ante a varius. Integer sed dignissim turpis. Suspendisse quis euismod sapien, vitae aliquam ante. Vivamus ac nibh sem. Suspendisse auctor viverra metus. Quisque mollis pellentesque accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus quis ex sed luctus. Nam id arcu massa. Duis convallis libero ac dui accumsan malesuada. Fusce quam metus, eleifend at felis tristique, vulputate porta mi. Duis arcu erat, sollicitudin vitae condimentum vitae, aliquam vel elit. Vivamus consequat sem velit, id dignissim mauris feugiat sit amet.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(2).jpg?raw=true",
                154.55,
                19
            );

            insertarAnimes(
                "Cowboy Bebop",
                ["0", "2"],
                ["Todos", "Antiguos"],
                "Nullam fermentum nibh feugiat ipsum finibus, ac auctor purus gravida.",
                "Nullam fermentum nibh feugiat ipsum finibus, ac auctor purus gravida. Donec massa tellus, iaculis nec rutrum at, tristique at massa. Fusce consequat odio orci. Maecenas a purus a urna tincidunt aliquet eu eget mauris. Aenean tincidunt risus arcu. Duis faucibus sapien at arcu dictum, nec molestie odio iaculis. Praesent accumsan nibh quis tortor tincidunt molestie. Vestibulum dolor est, dictum at enim vitae, ornare egestas est. Praesent dictum nibh lorem, ut egestas dui scelerisque vel. Curabitur justo orci, pulvinar sed porttitor id, venenatis in tellus. Maecenas eu lacus ut diam posuere hendrerit sit amet ullamcorper dui. Suspendisse imperdiet ante eget lobortis bibendum. Cras nec nisi est. Ut nibh quam, pellentesque sed dui non, blandit sagittis neque.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(3).jpg?raw=true",
                145.88,
                11
            );


            insertarAnimes(
                "Super Agent Cobra",
                ["0", "1"],
                ["Todos", "Nuevos"],
                "Pellentesque consectetur eget felis non ultrices.",
                "Pellentesque consectetur eget felis non ultrices. Nullam cursus in sem quis viverra. Cras vel mi augue. Ut auctor metus non lorem feugiat ornare. Quisque gravida pellentesque lorem. Donec molestie in urna nec molestie. Cras in dolor lectus. Ut elit magna, elementum at velit ut, convallis pharetra lacus. Fusce libero nibh, posuere in neque iaculis, pellentesque rutrum nibh.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(4).jpg?raw=true",
                777.85,
                9
            );

            insertarAnimes(
                "Neon Genesis Evangelion",
                ["0", "3"],
                ["Todos", "De Siempre"],
                "Aenean pharetra turpis non urna suscipit, nec cursus ipsum cursus.",
                "Aenean pharetra turpis non urna suscipit, nec cursus ipsum cursus. Morbi ac posuere orci. Curabitur sed ligula eget ex consequat sagittis. Sed tristique gravida tempus. Phasellus venenatis pretium interdum. Duis commodo lorem tellus, blandit rutrum nisi facilisis vel. Aenean ac egestas mauris.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(5).jpg?raw=true",
                116.66,
                8
            );

            insertarAnimes(
                "Ghost In The Shell",
                ["0", "1"],
                ["Todos", "Nuevos"],
                "Ut eu ex congue, auctor eros eget, rhoncus nunc.",
                "Ut eu ex congue, auctor eros eget, rhoncus nunc. Sed sodales risus id consequat gravida. Praesent et pellentesque ipsum. Proin laoreet tortor dignissim ante sagittis, tincidunt pellentesque nisi cursus. Vivamus eget mi non ipsum ornare porttitor sed sed metus. Phasellus id libero gravida erat vulputate tristique. Mauris vitae lacus lobortis, hendrerit nunc vel, aliquet risus. Nam sit amet tincidunt dolor.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(6).jpg?raw=true",
                125.88,
                7
            );

            insertarAnimes(
                "Ninja Scroll",
                ["0", "2"],
                ["Todos", "Antiguos"],
                "Curabitur ultricies felis vel massa porta, a viverra mi auctor.",
                "Curabitur ultricies felis vel massa porta, a viverra mi auctor. Vivamus porta cursus luctus. Suspendisse fermentum arcu vel malesuada dictum. Sed ac mauris in velit ullamcorper auctor. Nam nec est vitae dolor ultrices elementum. Sed ornare sollicitudin egestas. Phasellus vel nisl augue. Fusce lobortis accumsan magna sollicitudin dictum. Aliquam erat volutpat.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(7).jpg?raw=true",
                121.99,
                9
            );

            insertarAnimes(
                "Initial D",
                ["0", "3"],
                ["Todos", "De Siempre"],
                "Mauris mattis turpis vitae egestas porta. Pellentesque ac aliquet velit.",
                "Mauris mattis turpis vitae egestas porta. Pellentesque ac aliquet velit. Nullam sed lacus accumsan, bibendum purus pretium, auctor quam. Duis condimentum dui est. Pellentesque id scelerisque ipsum. Duis malesuada pretium ex, ut iaculis metus pulvinar ac. Suspendisse ut nisi gravida, laoreet tortor sit amet, varius leo.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(8).jpg?raw=true",
                158.88,
                15
            );

            insertarAnimes(
                "Dragon Ball - All",
                ["0", "2"],
                ["Todos", "Antiguos"],
                "Sed tempus rutrum velit, at vulputate diam vulputate id.",
                "Sed tempus rutrum velit, at vulputate diam vulputate id. Vivamus tincidunt neque a orci viverra, a tincidunt quam fermentum. Aliquam erat volutpat. Etiam porttitor, nunc ut lobortis sagittis, eros tellus consectetur nunc, sed ornare velit sapien non sem. Vivamus a erat eget mi eleifend viverra. Nullam lectus eros, iaculis aliquet magna vel, porttitor facilisis nulla. Suspendisse condimentum ut leo in egestas. Phasellus enim arcu, tempor id arcu et, molestie hendrerit velit. Mauris porttitor, velit id cursus iaculis, dui quam aliquet dui, sit amet gravida nunc mauris a mauris.",
                "https://github.com/christianjjc/proyecto-final-react/blob/ft-desafio-03/src/Item/img/mobilewp-img%20(9).jpg?raw=true",
                888.55,
                7
            );

    }


    useEffect(() => {
        obtenerDatos();
    }, [idCategoria]);

    return (
        <div className='row itemListContainer'>
            <div className="col-12">
                <div className="row">
                    <div className='text-center col-12'>
                        <h1>{`${titulo} ${idCategoria || ''}`}</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-12'>
                        <ItemList item={data} />
                    </div>
                </div>
                <button onClick={handleInsertaArray}>aaa</button>
            </div>
        </div>
    );
};

export default ItemListContainer;