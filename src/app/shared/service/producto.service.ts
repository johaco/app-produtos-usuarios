import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private readonly _http: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this._http.get<any[]>('https://fakestoreapi.com/products');
  }
}
