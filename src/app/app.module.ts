import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaChavesComponent } from './components/busca-chaves/busca-chaves.component';
import { BotaoComponent } from './components/botao/botao.component';
import { CriarChaveComponent } from './components/criar-chave/criar-chave.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteChaveDialogComponent } from './components/delete-chave-dialog/delete-chave-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateChaveDialogComponent } from './components/create-chave-dialog/create-chave-dialog.component';
import { SearchChavesDialogComponent } from './components/search-chaves-dialog/search-chaves-dialog.component';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    BuscaChavesComponent,
    BotaoComponent,
    CriarChaveComponent,
    DeleteChaveDialogComponent,
    CreateChaveDialogComponent,
    SearchChavesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
