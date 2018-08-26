export class Alimento {
  static seq: number = 0;

  static lista: Array<Alimento> = [];

  id: number;
  nome: String;
  qtd: number;

  constructor(data = {}) {
    Object.assign(this, data);
    this.id = Alimento.seq++;
  }
}
