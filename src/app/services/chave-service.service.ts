import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Chave } from '../models/chave';
import { Chaves } from '../models/chaves';

@Injectable({
  providedIn: 'root'
})

export class ChaveService {

  private apiUrl = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  listarChavesDisponiveis(): Observable<any[]> {
    return this.http.get<{chaves: any[]}>(`${this.apiUrl}/chaves_disp`).pipe(
      map(response => response.chaves.map(item => ({
        nome: item[1],
        situacao: item[2],
        status: item[3],
      })))
    );
  }
  
  enviarDados(dados: Chaves): Observable<any> {
    return this.http.post(`${this.apiUrl}/chaves`, dados);
  }

}