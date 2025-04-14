//solicita o que é exportável do arquivo/módulo externo a main
const product = require("./services/products"); //importa tudo que tá exportado no modulo
const {getFullName} = require("./services/products"); //importa apenas os componentes entre chaves
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log("carrinho compras: \n");
    database.connectToDatabase("produtos");
    product.getFullName("408", "mousepad"); //utilizando no pacote inteiro
    getFullName("508", "mouse"); //utilizando só a função importada
    product.getProductLabel("keyboard")
    console.log(config.devArea.production);
    console.log(config.client.device);
}

main();