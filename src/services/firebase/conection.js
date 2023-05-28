// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, limit, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCw3hPLQgT90kBsB857V8f5zbS3Z7soTdM",
    authDomain: "proyecto-final-react-v02.firebaseapp.com",
    projectId: "proyecto-final-react-v02",
    storageBucket: "proyecto-final-react-v02.appspot.com",
    messagingSenderId: "437450230464",
    appId: "1:437450230464:web:fdd99667b8b6f09dabfb25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of items from your database
export const getAnimesList = async (db,id,maxItems) => {
    const animesColl = collection(db, 'animes');
    const q = query(animesColl,
        where('idCategoria', 'array-contains', id ? id : '0'),
        limit(maxItems));
    const snapShot = await getDocs(q);
    const animesList = [];
    snapShot.forEach((doc) => {
        const data = doc.data();
        animesList.push({ id: doc.id, ...data });
    });
    return animesList;
}

const fnInsertar = async (collectionName, datosInsertar)=>{
    try{
        const animesColl = collection(db, collectionName);
        const docInsert = await addDoc(animesColl, datosInsertar);
        console.log('Ingresado el Doc id:' , docInsert.id);
    }
    catch (err){
        console.error('Error al agregar el documento:', err);
    }
}

export const insertarAnimes = (titulo, idCategoria, descCategoria, descShort, descripcion, imagen, precio, stock) => {
    const objetoInsertar = 
    {
        titulo,
        idCategoria,
        descCategoria,
        descShort,
        descripcion,
        imagen,
        precio,
        stock
    }
    fnInsertar('animes', objetoInsertar);
}





