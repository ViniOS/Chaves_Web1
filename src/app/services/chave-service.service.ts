import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Chave } from '../models/chave';
import { Chaves } from '../models/chaves';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})

export class ChaveService {

  private apiUrl = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  listarChavesDisponiveis(): Observable<Chave[]> {
    return this.http.get<{chaves: any[]}>(`${this.apiUrl}/chaves_disp`).pipe(
      map(response => response.chaves.map(item => ({
        nome: item[1],
        situacao: item[2],
        status: item[3],
      }))),
      catchError(error => {
        console.error('Erro na requisição HTTP: ', error);
        return throwError(error);
      })
    );
  }

  listarUmaChave(nomeChave: string): Observable<Chave> {
    return this.http.get<{chave: any}>(`${this.apiUrl}/chaves/${nomeChave}`).pipe(
      map(response => {
        let item = response.chave;
        return {
          nome: item[1],
          situacao: item[2],
          status: item[3],
        };
      })
    );
  }
  
  enviarDados(dados: Chaves): Observable<any> {
    return this.http.post(`${this.apiUrl}/chaves`, dados);
  }

  atualizarDados(dados: Chaves): Observable<any> {
    return this.http.put(`${this.apiUrl}/chaves/${dados.nome}`, dados);
  }

  desabilitarDados(nomeChave: string){
    return this.http.delete<ApiResponse>(`${this.apiUrl}/chaves/${nomeChave}` , {observe: 'response'});
  }

}