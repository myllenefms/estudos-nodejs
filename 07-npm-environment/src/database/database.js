
async function connectToDatabase(user, password) {
    if (user === process.env.USERDATABASE && 
        password === process.env.PASSWORDDATABASE){
        console.log(`conexão com banco de dados de ${process.env.npm_lifecycle_event} de estabelecida`)
    }
    else{
        console.log(`falha de login, não foi possível se conectar ao banco de dados de ${process.env.npm_lifecycle_event}`)
    }
}

export default connectToDatabase;