class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar() {
      let ataque
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia'
          break;
        case 'guerreiro':
          ataque = 'espada'
          break;
        case 'monge':
          ataque = 'artes marciais'
          break;
        case 'ninja':
          ataque = 'shuriken'
          break
        default:
          ataque = 'um ataque indefinido'
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
  }
  
  const heroiMago = new Heroi('Feticeira Escarlate', 3000, 'mago')
  heroiMago.atacar()
  
  const heroiGuerreiro = new Heroi('He-man', 1500, 'guerreiro')
  heroiGuerreiro.atacar()
  
  const heroiMonge = new Heroi('O-Sensei', 2000, 'monge')
  heroiMonge.atacar()
  
  const heroiNinja = new Heroi('kakashi', 1300, 'ninja')
  heroiNinja.atacar()