import chalk from "chalk";
import qr from "qrcode-terminal";

async function handle(err, result) {
    if (err){
        console.log("error on application");
        return;
    }
    
    const type = result.type == 1;

    qr.generate(result.link, {small: type}, (qrcode) => {
        console.log(chalk.green.bold("QR CODE gerado com sucesso! \n"));
        console.log(qrcode);
    });

}

export default handle;