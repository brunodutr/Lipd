export class Mensagem {
  static count = 0;

  id: Number;
  nome: String;
  texto: String;
  email: String;
  status: String;

  constructor(data = {}) {
    Object.assign(this, data);
    if (!this.status) this.status = 'A';
    this.id = Mensagem.count++;
  }
}
