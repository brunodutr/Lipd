import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss']
})
export class PacientesPage implements OnInit {
  pacientes = [
    {
      nome: 'Maria',
      img: '/assets/avatar/av1.jpg'
    },
    {
      nome: 'Douglas',
      img: '/assets/avatar/av2.jpg'
    },
    {
      nome: 'André',
      img: '/assets/avatar/av3.jpg'
    },
    {
      nome: 'Carla',
      img: '/assets/avatar/av4.jpg'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
