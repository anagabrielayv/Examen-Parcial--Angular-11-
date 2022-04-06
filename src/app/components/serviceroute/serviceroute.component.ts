import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/entities/proveedor';
import { ProveedorserviceService } from 'src/app/services/proveedorservice.service';

@Component({
  selector: 'app-serviceroute',
  templateUrl: './serviceroute.component.html',
  styleUrls: ['./serviceroute.component.css']
})
export class ServicerouteComponent implements OnInit {

  listaProveedor: Proveedor[];

  constructor(private proveedorService: ProveedorserviceService) { }

  ngOnInit(): void {
    this.proveedorService.proveedoresSelect().subscribe(
      (res:Proveedor[]) => {
        this.listaProveedor = res;
        console.log(res);
      }
    )

  }

}
