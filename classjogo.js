// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
// Método para realizar o ataque
    atacar() {
        let ataque;
// Determinando o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia'
                break;
            case 'guerreiro':
                ataque = 'espada'
                break;
            case 'monge':
                ataque = 'artes marciais'
                break
            case 'ninja':
                ataque = 'shuriken'
                break
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('Jhames', 36, 'guerreiro')
const heroi2 = new Heroi('Kalazar', 450, 'mago')
const heroi3 = new Heroi('Kinjuan', 60, 'monge')
const heroi4 = new Heroi('Jiraya', 30, 'ninja')

// Chamando o método atacar para cada herói
heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
