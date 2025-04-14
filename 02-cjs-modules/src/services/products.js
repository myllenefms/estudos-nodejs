//funções que lidam com produto
async function getFullName(codeID, productName) {
    console.log("product: " + codeID + doDoubleHifen() + productName);
}

//funçãoo interna ao modulo produts - hidden function
function doDoubleHifen() {
    return " -- ";
}

async function getProductLabel(productName) {
    console.log("product " + productName);
}

//forma de exportar a função => permite que arquivos/modulos externos enxerguem a função
//os itens exportados são personalizados.
module.exports = {
    getFullName,
    getProductLabel
};