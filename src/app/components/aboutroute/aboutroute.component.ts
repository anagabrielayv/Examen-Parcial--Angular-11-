import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/entities/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-aboutroute',
  templateUrl: './aboutroute.component.html',
  styleUrls: ['./aboutroute.component.css']
})
export class AboutrouteComponent implements OnInit {
  listaCliente: Cliente[];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.clienteService.clienteSelect().subscribe(
      (res:Cliente[]) => {
        this.listaCliente = res;
        console.log(res);
      }
    )
  }

}
