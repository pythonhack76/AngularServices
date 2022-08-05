import { Component, OnInit } from '@angular/core';
import { Servizio } from '../servizio';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css']
})
export class ServiziComponent implements OnInit {

  servizio: Servizio = {
    id: 1,
    nome: 'Siti Web'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
