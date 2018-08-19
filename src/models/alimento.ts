export class Alimento {
  static count = 0;

  id: Number;
  nome: String;
  qtd: Number;

  constructor(data = {}) {
    Object.assign(this, data);
    this.id = Alimento.count++;
  }
}
