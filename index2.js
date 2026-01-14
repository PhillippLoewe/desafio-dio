// Função que calcula o nível do jogador
function calcularNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldo, nivel };
}

// Chamando a função e exibindo os resultados no console
let jogador1 = calcularNivel(35, 15);
console.log(`O Herói tem de saldo de ${jogador1.saldo} está no nível de ${jogador1.nivel}`);

let jogador2 = calcularNivel(105, 20);
console.log(`O Herói tem de saldo de ${jogador2.saldo} está no nível de ${jogador2.nivel}`);

let jogador3 = calcularNivel(8, 5);
console.log(`O Herói tem de saldo de ${jogador3.saldo} está no nível de ${jogador3.nivel}`);
