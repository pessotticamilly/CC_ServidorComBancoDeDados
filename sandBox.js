const crud = require("./crud");

async function salvarDado() {
    const savedData = await crud.save("pessoas", undefined, { nome: "Camiss", sobrenome: "Pessotti", idade: 17 });
    console.log(savedData);
}

salvarDado();