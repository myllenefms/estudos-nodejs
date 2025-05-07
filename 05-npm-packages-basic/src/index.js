import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(logSymbols.success, chalk.green.bold("servidor iniciado"));

console.log(logSymbols.error, chalk.red.bold("servidor não iniciado"));
