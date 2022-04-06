import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  constructor(private http: HttpClient) { }

  bannerSelect(){
    const ruta = "https://zisoftacademy.com/apiclases/database_promocion.php";
    return this.http.get(ruta);
  
 
}
}
