import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscaChavesComponent } from './components/busca-chaves/busca-chaves.component';
import { BotaoComponent } from './components/botao/botao.component';
import { CriarChaveComponent } from './components/criar-chave/criar-chave.component';
import { ReactiveFormsModule } from '@angular/forms';
ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    BuscaChavesComponent,
    BotaoComponent,
    CriarChaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
