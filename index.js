
// Calculadora de partidas Rankeadas.
let jogador = "Neimar"
let vitorias = 80
let derrotas = 5
let nivel
let resultado = subtracao(vitorias, derrotas)


function subtracao(vitorias, derrotas){
	let subtracao = vitorias - derrotas
    	return subtracao
    }

if (resultado < 10) {
    nivel = "Ferro"
    } 

  else if (resultado >= 11 && resultado <= 20) {
    nivel = "Bronze"
    
} else if (resultado >= 21 && resultado <= 50) {
    nivel = "Prata"
    
} else if (resultado >= 51 && resultado <= 80) {
    nivel = "Ouro"
    
} else if (resultado >= 81 && resultado <= 90) {
    nivel = "Diamante"
    
} else if (resultado >= 91 && resultado <= 100) {
    nivel = "Lendário"
    
} if (resultado >= 101) {
    nivel = "Imortal"
    
} 

 
console.log("O jogador " + jogador,"tem saldo de " + resultado, "vitórias", " está no nível de: " + nivel)