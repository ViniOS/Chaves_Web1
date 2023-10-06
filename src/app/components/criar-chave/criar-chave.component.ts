import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChaveService } from 'src/app/services/chave-service.service';
import { Chave } from 'src/app/models/chave';
import { Chaves } from 'src/app/models/chaves';

@Component({
  selector: 'app-criar-chave',
  templateUrl: './criar-chave.component.html',
  styleUrls: ['./criar-chave.component.css']
})
export class CriarChaveComponent {


  form_criaChave = new FormGroup({
    nome: new FormControl (''),
    situacao : new FormControl (''),
    status: new FormControl ('')
  })

  constructor(private chaveService: ChaveService) {}

  onSubmit(e: Event){
    e.preventDefault();

    dadosForm: new Chaves()
    dadosForm.nome = this.form_criaChave.value.nome

    this.chaveService.enviarDados(this.form_criaChave.value)
      .subscribe(res => {
        console.log(res);
        // Aqui você pode adicionar código para lidar com a resposta da sua API
      }, err => {
        console.error(err);
        // Aqui você pode adicionar código para lidar com erros
      }
    );
  }
}
