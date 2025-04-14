//export default: uso de arrow function e não é async

exports.connectToDatabase = async (dataName) => { //assinatura para que a função seja assincrona
    console.log("se conectando ao banco: " + dataName);
}

exports.disconnectDatabase = async () => {
    console.log("desconectando");
}