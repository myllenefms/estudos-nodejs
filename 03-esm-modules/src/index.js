//importação unica
import connectToDatabase from "./utils/database.js"; //precisa ter a extensão do arquivo
//extensão "mjs" identifica arquivos que são módulos por natureza. padrão depende da empresa
import { getDataFromAPI } from "./utils/api.js";

//import * as database from "./utils/database.js" //importação total
import {disconnectDatabase, databaseType} from "./utils/database.js" //destruturação, importação parcial


connectToDatabase("mydatabase"); //so funciona se tiver export default
console.log(databaseType.userType);
disconnectDatabase();
getDataFromAPI();

//a extensão do arquivo identifica a forma de modularização - melhorar a vida do dev
// se .cjs -> modularização antiga usando module.exports e require
// se .mjs -> modularização ecma usando exports e import
// se .js -> pode usar ambos tipos de modulos