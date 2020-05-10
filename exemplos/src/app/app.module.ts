
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { CotacaoService } from './cotacao/cotacao.service';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DadosComponent } from './dados/dados.component';
import { AlunosService } from './alunos/alunos.service';
import { DadosService } from './dados/dados.service';

@NgModule({
  declarations: [
    AppComponent,
    CotacaoComponent,
    HomeComponent,
    AlunosComponent,
    DadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [CotacaoService, AlunosService, DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
