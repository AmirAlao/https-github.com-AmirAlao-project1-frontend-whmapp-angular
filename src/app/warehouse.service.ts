import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Warehouse from './models/Warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  url = "http://localhost:9999/whmapp/whm";

  constructor(private httpClient: HttpClient) { }
  
  findAll(): Observable<Warehouse[]>{
    return this.httpClient.get<Warehouse[]>(this.url); 
   }

  save(warehouse: Warehouse): Observable<Warehouse>{
   return this.httpClient.post<Warehouse>(this.url, warehouse);
  }
  update(warehouse: Warehouse): Observable<Warehouse>{
    return this.httpClient.put<Warehouse>(this.url, warehouse);
  }

}
