export class Alimento {
  static seq: number = 0;

  static lista: Array<Alimento> = [
    new Alimento({ nome: 'Abacate', qtd: 5 }),
    new Alimento({ nome: 'Arroz', qtd: 10 })
  ];

  id: number;
  nome: String;
  qtd: number;

  constructor(data = {}) {
    Object.assign(this, data);
    this.id = Alimento.seq++;
  }
}
