import { Component } from '@angular/core';
import { ChaveService } from '../../services/chave-service.service';
import { Chaves } from 'src/app/models/chaves/chaves';
import { BotaoComponent } from '../botao/botao.component';
@Component({
  selector: 'app-busca-chaves',
  templateUrl: './busca-chaves.component.html',
  styleUrls: ['./busca-chaves.component.css']
})
export class BuscaChavesComponent {
  chaves: Chaves[] = [];

  constructor(private chaveService: ChaveService) {}

  listarChavesDisponiveis() {
    this.chaveService.listarChavesDisponiveis().subscribe(
      (response) => {
        this.chaves = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
