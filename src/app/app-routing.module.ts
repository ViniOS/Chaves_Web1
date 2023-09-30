
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaChavesComponent } from './components/busca-chaves/busca-chaves.component';

const routes: Routes = [
  { path: 'chaves', component: BuscaChavesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
