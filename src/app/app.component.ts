import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DeleteChaveDialogComponent } from './components/delete-chave-dialog/delete-chave-dialog.component';
import { CreateChaveDialogComponent } from './components/create-chave-dialog/create-chave-dialog.component';
import { SearchChavesDialogComponent } from './components/search-chaves-dialog/search-chaves-dialog.component';
import { Chave } from './models/chave';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Chaves: Chave[] = [{
    nome:'302',
    situacao: 'fudida',
    status: 'fulano'
  }]
  displayedColumns: String[] = ['nome', 'situacao', 'status']

  constructor(public dialog: MatDialog){}

  openExcluir() {
    const dialogRef = this.dialog.open(DeleteChaveDialogComponent, {
      width:'330px',
      hasBackdrop: true,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCadastrar(){
    this.dialog.open(CreateChaveDialogComponent, {
      width:'330px',
      hasBackdrop: true,
      disableClose: false
    });
  }

  openBuscar(){
    const dialogRef = this.dialog.open(SearchChavesDialogComponent, {
      width:'330px',
      hasBackdrop: true,
      disableClose: false
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
