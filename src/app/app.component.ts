import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './empresa.service';
import { Pessoa } from './pessoa';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  customers: Pessoa[] = [];
  title = 'angular-dxdatagrid-lab';

  constructor(private empresaService:EmpresaService) {
    empresaService.list().subscribe((pessoas: Pessoa[])=>this.customers=pessoas);
  }
}
