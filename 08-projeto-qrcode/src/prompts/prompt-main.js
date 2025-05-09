import chalk from "chalk";
//esquema de configuração para o prompt inicial
const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta: 1 - QRCode ou 2 - PASSWORD"),
        pattern: /^[1-2]+$/, //o final não deve ter nada e só permite os caracteres dentro das chaves
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
]

export default mainPrompt;