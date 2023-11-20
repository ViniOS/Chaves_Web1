import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Chave } from 'src/app/models/chave';
import { ChaveService } from 'src/app/services/chave-service.service';


@Component({
  selector: 'app-search-chaves-dialog',
  templateUrl: './search-chaves-dialog.component.html',
  styleUrls: ['./search-chaves-dialog.component.css']
})
export class SearchChavesDialogComponent {

  nomeChave: string = ''
  item: Chave | undefined

  constructor(private chaveService: ChaveService,
              private dialogRef: MatDialogRef<SearchChavesDialogComponent>){}

  buscarUmaChave(){
    this.chaveService.listarUmaChave(this.nomeChave).subscribe(chave =>{
      this.item = chave
      this.dialogRef.close(this.item)
    },
    (error) => {
      console.error(error);
    })
  }
  
}
