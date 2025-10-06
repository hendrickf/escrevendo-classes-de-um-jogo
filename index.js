// Classe genérica do herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "tentou atacar, mas o tipo é desconhecido 😅";
    }

    alert(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Função para criar e mostrar um novo herói
function criarHeroi() {
  let nome = prompt("Digite o nome do herói:");
  let idade = prompt("Digite a idade do herói:");
  let tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge ou ninja):");

  let heroi = new Heroi(nome, idade, tipo);
  heroi.atacar();
}

// --- Loop principal ---
while (true) {
  let opcao = prompt("Digite 'criar' para gerar um herói ou 'sair' para encerrar o jogo:");

  if (opcao.toLowerCase() === "sair") {
    alert("🛑 Saindo do jogo... Até a próxima, guerreiro!");
    break;
  } else if (opcao.toLowerCase() === "criar") {
    criarHeroi();
  } else {
    alert("⚠️ Opção inválida! Digite 'criar' ou 'sair'.");
  }
}
