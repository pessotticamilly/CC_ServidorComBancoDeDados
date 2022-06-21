const { initializeApp, applicationDefault, cert } = require('firebase/app');
const { getFirestore, Timestamp, FieldValue, collection } = require('firebase/firestore');

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
  
async function save(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await collection(nomeTabela).doc(id).set(dado);
        const savedDado = {
            ... dado,
            id: id
        }

        return savedData;
    } else {
        const referenceEntity = await collection(nomeTabela).add(dado);
        const savedData = {
            ... dado,
            id: referenceEntity.id
        };

        return savedData;
    };
};

//coleção = tabela

module.exports = {
    save
}
