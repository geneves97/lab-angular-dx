import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly API = 'http://localhost:3000/Pessoa';

  constructor(private http: HttpClient) {}

  list(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API);
  }

}
