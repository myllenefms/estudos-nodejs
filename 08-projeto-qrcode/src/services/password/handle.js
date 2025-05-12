import permittedCharacters from "./utils/permitted-characters.js";


async function handle() {
    let characters = [];
    let password = "";

    const password_length = process.env.PASSWORD_LENGTH;

    characters = await permittedCharacters();

    for (let i =0; i < password_length; i++){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;

}

export default handle;