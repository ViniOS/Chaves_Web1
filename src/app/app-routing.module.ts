
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaChavesComponent } from './components/busca-chaves/busca-chaves.component';
import { CriarChaveComponent } from './components/criar-chave/criar-chave.component';

const routes: Routes = [
  { path: 'busca', component: BuscaChavesComponent },
  { path: 'cria', component: CriarChaveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
