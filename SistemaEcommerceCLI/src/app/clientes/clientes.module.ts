import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClientesRoutingModule } from './clientes-routing.module';

@NgModule({
  declarations: [ClienteListComponent],
  imports: [
    CommonModule, ClientesRoutingModule, FormsModule
  ]
})
export class ClientesModule { }
