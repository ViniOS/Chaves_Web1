import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BotaoComponent } from './components/botao/botao.component';
import { CriarChaveComponent } from './components/criar-chave/criar-chave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteChaveDialogComponent } from './components/delete-chave-dialog/delete-chave-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateChaveDialogComponent } from './components/create-chave-dialog/create-chave-dialog.component';
import { SearchChavesDialogComponent } from './components/search-chaves-dialog/search-chaves-dialog.component';
import {MatTableModule} from '@angular/material/table';
import { EditChaveDialogComponent } from './components/edit-chave-dialog/edit-chave-dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar'






@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    CriarChaveComponent,
    DeleteChaveDialogComponent,
    CreateChaveDialogComponent,
    SearchChavesDialogComponent,
    EditChaveDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
