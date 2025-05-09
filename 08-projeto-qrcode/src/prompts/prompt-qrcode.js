import chalk from "chalk";
//esquema de configuração para o prompt sobre qrcode
const qrcodePrompt = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link para gerar o QR CODE"),
        required: true,
        message: chalk.red.italic("O link não pode ser vazio.")
    },
    {
        name: "type",
        description: chalk.yellow.bold("Digite o tipo de preferência: 1 - terminal ou 2 - imagem"),
        required: true,
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2")
    }
]

export default qrcodePrompt;