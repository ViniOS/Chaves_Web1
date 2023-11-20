import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChaveService } from 'src/app/services/chave-service.service';

@Component({
  selector: 'app-create-chave-dialog',
  templateUrl: './create-chave-dialog.component.html',
  styleUrls: ['./create-chave-dialog.component.css']
})
export class CreateChaveDialogComponent {

  form_criaChave!: FormGroup;

  ngOnInit() {
    this.form_criaChave = new FormGroup({
      nome: new FormControl ('', Validators.required),
      situacao : new FormControl ('', Validators.required),
      status: new FormControl ('', Validators.required)
    });
  }

  constructor(private chaveService: ChaveService,
              private _snackBar: MatSnackBar) {}

  onSubmit(e: Event) {
    console.log(this.form_criaChave.value);
    if (this.form_criaChave.valid) {
      this.chaveService.enviarDados(this.form_criaChave.value)
        .subscribe(res => {
          console.log(res);
          this._snackBar.open(`${res.message}`, 'X', {duration: 5000, verticalPosition: 'top', horizontalPosition: 'center'})
          this.form_criaChave.reset()
          
        }, err => {
          this._snackBar.open(`${err}`, 'X', {duration: 5000, verticalPosition: 'top', horizontalPosition: 'center'})
          
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }
  
}
