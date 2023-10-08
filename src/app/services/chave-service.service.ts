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

  // listarChavesDisponiveis(): Observable<Chave[]> {
  //   return this.http.get<Chave[]>(`${this.apiUrl}/chaves_disp`);
  // }

  listarChavesDisponiveis(): Observable<Chaves[]> {
    return this.http.get<{chaves: Chave[]}>(`${this.apiUrl}/chaves_disp`).pipe(
      map(response => response.chaves.map(item => ({
        nome: item.nome,
        situacao: item.situacao,
        status: item.status,
      } as Chaves)))
    );
  }
  
  enviarDados(dados: Chaves): Observable<any> {
    return this.http.post(`${this.apiUrl}/caminho/para/sua/api`, dados);
  }

}