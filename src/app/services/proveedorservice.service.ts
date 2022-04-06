import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedorserviceService {

  constructor(private http: HttpClient) { }
    
  proveedoresSelect(){
    const ruta = "https://servicios.campus.pe/servicioproveedores.php";
    return this.http.get(ruta);
  
  }
}
