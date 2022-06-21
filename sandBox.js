const crud = require("./crud");

async function buscarDados() {
    const dados = await crud.get("pessoas");
    console.log(dados);
}

async function buscarDadoID() {
    const dados = await crud.getByID("pessoas", "E1PvPDQTwcZMj8Hbisvv");
    console.log(dados);
}

async function remover() {
    const dados = await crud.getByID("pessoas", "ZGz3cVuTUjLwbDaJCMWJ");
}

remover();