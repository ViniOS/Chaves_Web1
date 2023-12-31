import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChaveService } from 'src/app/services/chave-service.service';

@Component({
  selector: 'app-criar-chave',
  templateUrl: './criar-chave.component.html',
  styleUrls: ['./criar-chave.component.css']
})
export class CriarChaveComponent {

  form_criaChave!: FormGroup;

  ngOnInit() {
    this.form_criaChave = new FormGroup({
      nome: new FormControl ('', Validators.required),
      situacao : new FormControl ('', Validators.required),
      status: new FormControl ('', Validators.required)
    });
  }

  constructor(private chaveService: ChaveService) {}

  onSubmit(e: Event) {
    console.log(this.form_criaChave.value);
    if (this.form_criaChave.valid) {
      this.chaveService.enviarDados(this.form_criaChave.value)
        .subscribe(res => {
          console.log(res);
          this.form_criaChave.reset()
          
        }, err => {
          console.error(err);
          
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
}
