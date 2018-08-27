export class Alimento {
  nome: String;
  qtd: number;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}
