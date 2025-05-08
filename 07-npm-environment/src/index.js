import connectToDatabase from "./database/database.js";

async function main()
{
    await connectToDatabase("usrdev", "senhadedev")
}

main()