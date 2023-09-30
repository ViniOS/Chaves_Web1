import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chaves } from '../models/chaves/chaves';

@Injectable({
  providedIn: 'root'
})
export class ChaveService {

  constructor(private http: HttpClient) { }

  listarChavesDisponiveis(): Observable<Chaves[]> {
    return this.http.get<Chaves[]>('/chaves');
  }
}