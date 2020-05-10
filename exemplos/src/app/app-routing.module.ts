
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos/alunos.component';
import { DadosComponent } from './dados/dados.component';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"cotacao", component: CotacaoComponent},
  {path:"dados", component: DadosComponent},
  {path:"alunos", component: AlunosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
