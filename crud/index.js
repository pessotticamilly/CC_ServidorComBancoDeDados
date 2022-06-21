const { initializeApp, applicationDefault, cert } = require('firebase/app');
const { getFirestore, collection, doc, setDoc, addDoc, query, where, getDocs } = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyCMfYydh79dinleDXYyRRKm5S7cLjIATEg",
    authDomain: "servidor-com-banco-de-dados.firebaseapp.com",
    projectId: "servidor-com-banco-de-dados",
    storageBucket: "servidor-com-banco-de-dados.appspot.com",
    messagingSenderId: "632108984809",
    appId: "1:632108984809:web:cf20fb6c246e3f41c34378",
    measurementId: "G-PVR5DW0PJX"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

//colletion(coleção) = tabela

async function save(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedDado = {
            ...dado,
            id: id
        }

        return savedData;

    } else {
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        };

        return savedData;
    };
};


async function get(nomeTabela) {
    const tableRef = collection(db, nomeTabela);

    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
        console.log(doc.id, " => ", doc.data());
    });
};

module.exports = {
    save,
    get
}
