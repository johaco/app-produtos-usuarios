import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private readonly _http: HttpClient) { }

  getUsuarios(): Observable<any[]>{
    return this._http.get<any[]>('https://fakestoreapi.com/users');
  }
}
