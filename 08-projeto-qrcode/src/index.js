import prompt from "prompt";
import chalk from "chalk";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import SchemaMain from "./prompts-schema/schema-main.js";

async function main() {
    prompt.get((SchemaMain), async (err, choice) => {
        if(err) console.log(err);
        
        if (choice.select == 1) await createQRCode() ;
        if (choice.select == 2) await createPassword(); 
    })

    prompt.start();
}

main();
