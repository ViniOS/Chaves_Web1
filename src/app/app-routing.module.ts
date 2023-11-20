
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarChaveComponent } from './components/criar-chave/criar-chave.component';

const routes: Routes = [
  { path: 'cria', component: CriarChaveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
