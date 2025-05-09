import prompt from "prompt";
import qrcodePrompt from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
    prompt.get(qrcodePrompt, handle)

}

export default createQRCode;