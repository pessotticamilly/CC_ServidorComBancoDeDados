const crud = require("./crud");

async function buscarDados() {
    const dados = await crud.get("pessoas");
    console.log(dados);
}

buscarDados();