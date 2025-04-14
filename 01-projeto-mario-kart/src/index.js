const player1 = {
    nome : "Mario",
    velocidade : 4,
    manobrabilidade : 3,
    poder: 3,
    pontos: 0,
};

const player2 = {
    nome : "Luigi",
    velocidade : 3,
    manobrabilidade : 4,
    poder: 4,
    pontos: 0,
};

async function rollDice(){ 
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;

        case random > 0.66:
            result = "CONFRONTO";
            break;

        default:
            result = "CURVA"
            break;
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} \n Valor do dado: ${diceResult} \n Valor do ${block}: ${attribute} \n Total: ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <=5; round++){
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        switch (block){
            case "RETA":
                totalTestSkill1 = diceResult1 + character1.velocidade;
                totalTestSkill2 = diceResult2 + character2.velocidade;

                await logRollResult(player1.nome, "velocidade", diceResult1, player1.velocidade);
                await logRollResult(player2.nome, "velocidade", diceResult2, player2.velocidade);

                if (totalTestSkill1 > totalTestSkill2) {
                    console.log(`${character1.nome} marcou um ponto!`);
                    character1.pontos++;
                }
                else if (totalTestSkill1 < totalTestSkill2) {
                    console.log(`${character2.nome} marcou um ponto!`);
                    character2.pontos++;
                }

                break;
            case "CURVA":
                totalTestSkill1 = diceResult1 + character1.manobrabilidade;
                totalTestSkill2 = diceResult2 + character2.manobrabilidade;

                await logRollResult(player1.nome, "manobrabilidade", diceResult1, player1.manobrabilidade);
                await logRollResult(player2.nome, "manobrabilidade", diceResult2, player2.manobrabilidade);
           
                if (totalTestSkill1 > totalTestSkill2) {
                    console.log(`${character1.nome} marcou um ponto!`);
                    character1.pontos++;
                }
                else if (totalTestSkill1 < totalTestSkill2) {
                    console.log(`${character2.nome} marcou um ponto!`);
                    character2.pontos++;
                }

                break;
            case "CONFRONTO":
                let powerResult1 = diceResult1 + character1.poder;
                let powerResult2 = diceResult2 + character2.poder;

                await logRollResult(player1.nome, "poder", diceResult1, player1.poder);
                await logRollResult(player2.nome, "poder", diceResult2, player2.poder);
            
                console.log(`${character1.nome} confrontou ${character2.nome}! 🥊`);

                if (powerResult1 > powerResult2 && character2.pontos > 0) {
                    character2.pontos--;
                    console.log(`${character1.nome} venceu o confronto! ${character2.nome} perdeu um ponto! 🐢`)
                }
                else if(powerResult1 < powerResult2 && character1.pontos > 0) {
                    character1.pontos--;
                    console.log(`${character2.nome} venceu o confronto! ${character1.nome} perdeu um ponto! 🐢`)
                }
                else if(powerResult1 === powerResult2){
                console.log("Confronto Empatado! Nenhum ponto perdido!");
                }

                break;
        }
        console.log("-------------------------------------------------")
    }

    
}

async function declareWinner(character1, character2) {
    console.log("Resultado Final:");
    console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
    console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);

    if (character1.pontos > character2.pontos){
        console.log(`\n${character1.nome} venceu a corrida! Parabéns! 🏆`);
    }
    else if (character1.pontos < character2.pontos){
        console.log(`\n${character2.nome} venceu a corrida! Parabéns! 🏆`);
    }
    else {
        console.log("A corrida terminou em empate");
    }
}


(async function  main() {
    console.log(
        `🏁 Corrida entre ${player1.nome} e ${player2.nome} começando... \n`
    );
    
    await playRaceEngine(player1, player2); //espera uma função esperar executar antes de continuar

    await declareWinner(player1, player2);

})() //funcao auto invocável

