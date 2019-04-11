import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.sass']
})
export class ClienteListComponent implements OnInit {

  constructor() { }

  clientes: Cliente[] = [];

  ngOnInit() {
    this.clientes = [{
      'codigo': 1,
      'nome': 'Carlos',
      'cargo': 'Professor',
      'endereco': 'Rua teste, 65, Jardim das Palmeiras',
      'cidade': 'Uberlandia',
      'cep': '38400-000',
      'pais': 'Brasil',
      'telefone': '34944423402',
      'fax': '343434344'
    },
    {
      'codigo': 2,
      'nome': 'Martin Fowler',
      'cargo': 'CEO',
      'endereco': '40, street view, google',
      'cidade': 'Miami',
      'cep': '30111',
      'pais': 'USA',
      'telefone': '55100912333',
      'fax': '232323'
    },
    ]
  }

}
