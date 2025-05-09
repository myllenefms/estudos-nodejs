import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";

async function main() {
    prompt.get(mainPrompt, async (err, choice) => {
        if (choice.select == 1) console.log ("escolheu qrcode") ;
        if (choice.select == 2) console.log ("escolheu password"); 
    })

    prompt.start();
}

main();
