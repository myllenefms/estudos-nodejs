import prompt from "prompt";
import handle from "./handle.js";
import SchemaQRCode from "../../prompts-schema/schema-qrcode.js";

async function createQRCode() {
    prompt.get(SchemaQRCode, handle)

}

export default createQRCode;