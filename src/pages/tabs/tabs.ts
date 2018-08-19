import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { HistoricoPage } from '../historico/historico';
import { DiarioPage } from '../diario/lista/diario';
import { ConfiguracaoPage } from '../configuracao/configuracao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabDiario = DiarioPage;
  tabInicio = InicioPage;
  tabHistorico = HistoricoPage;
  tabConfiguracao = ConfiguracaoPage;

  constructor() {}
}
