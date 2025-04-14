const databaseType = {
    userType: "admin",
    typeData: "dataLocal"
}

async function connectToDatabase(dataName) {
    //logica de conexão
    console.log(`Conectado ao banco ${dataName}`)
}

async function disconnectDatabase() {
    console.log("desconectando do banco de dados")
}

export default connectToDatabase; //exportação por padrão de único componente

export { //exportação de multiplos componentes
    connectToDatabase,
    disconnectDatabase,
    databaseType
};

