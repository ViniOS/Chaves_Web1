import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Chave } from 'src/app/models/chave';
import { ChaveService } from 'src/app/services/chave-service.service';
import { SearchChavesDialogComponent } from '../search-chaves-dialog/search-chaves-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiResponse } from 'src/app/models/apiResponse';


@Component({
  selector: 'app-delete-chave-dialog',
  templateUrl: './delete-chave-dialog.component.html',
  styleUrls: ['./delete-chave-dialog.component.css']
})
export class DeleteChaveDialogComponent {
  nomeChave: string = ''

  constructor(private chaveService: ChaveService,
              private dialogRef: MatDialogRef<SearchChavesDialogComponent>,
              private _snackBar: MatSnackBar){}

  desabilitarUmaChave(){
    console.log(this.nomeChave);
    
    this.chaveService.desabilitarDados(this.nomeChave).subscribe((res: { body: ApiResponse | null }) => {
      if (res.body) {
        this._snackBar.open(`${res.body.message}`, 'X', {duration: 5000, verticalPosition: 'top', horizontalPosition: 'center'})
      }
    },
    (error) => {
      console.error(error);
    })
  }
}
