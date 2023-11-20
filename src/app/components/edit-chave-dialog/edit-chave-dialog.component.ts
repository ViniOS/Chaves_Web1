import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { config } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ChaveService } from 'src/app/services/chave-service.service';

@Component({
  selector: 'app-edit-chave-dialog',
  templateUrl: './edit-chave-dialog.component.html',
  styleUrls: ['./edit-chave-dialog.component.css']
})
export class EditChaveDialogComponent {
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
      this.chaveService.atualizarDados(this.form_criaChave.value)
        .subscribe(res => {
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
