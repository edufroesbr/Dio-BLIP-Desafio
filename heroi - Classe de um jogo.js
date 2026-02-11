class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque genérico';
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi('Arion', 120, 'mago');
const heroi2 = new Heroi('Brom', 40, 'guerreiro');
const heroi3 = new Heroi('Lyra', 28, 'monge');
const heroi4 = new Heroi('Kenshi', 32, 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();