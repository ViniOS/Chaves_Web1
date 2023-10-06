import { Component } from '@angular/core';
import { ChaveService } from '../../services/chave-service.service';
import { Chave } from 'src/app/models/chave';
import { BotaoComponent } from '../botao/botao.component';
import { Chaves } from 'src/app/models/chaves';


@Component({
  selector: 'app-busca-chaves',
  templateUrl: './busca-chaves.component.html',
  styleUrls: ['./busca-chaves.component.css']
})
export class BuscaChavesComponent {
  chaves: Chaves [] = []; 
  chave: Chaves = new Chaves();

  constructor(private chaveService: ChaveService) {}

  // ngOnInit(){
  //   this.listarChavesDisponiveis();
  // }

  listarChavesDisponiveis() {
    this.chaveService.listarChavesDisponiveis().subscribe(
      (response: any) => {
        response.chaves.forEach((item: any) => {
          this.chave = {
            nome: item[1],
            situacao: item[2],
            status: item[3],
          } as Chaves;
          this.chaves.push(this.chave);
        });
        console.log(this.chaves);
      },
      (error) => {
        console.error(error);
      }
    );
  }
    
}
