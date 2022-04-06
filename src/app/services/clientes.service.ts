import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {  }
    clienteSelect(){
      const ruta = "https://servicioweb-2021.000webhostapp.com/listadoAbout.php";
      return this.http.get(ruta);
    
   
  }
}
