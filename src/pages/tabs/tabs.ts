import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { HistoricoPage } from '../historico/historico';
import { DiarioPage } from '../diario/lista/diario';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabDiario = DiarioPage;
  tabInicio = InicioPage;
  tabHistorico = HistoricoPage;

  constructor() {}
}
