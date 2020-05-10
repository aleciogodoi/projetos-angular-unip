import { DadosService } from './dados.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  public dados: any[] =[];
  constructor(private dadosService: DadosService) { }
 
  ngOnInit() {
    this.getDados();
  }

  getDados(){
    this.dadosService.getData().subscribe((data) => {
      this.dados = Array.from(Object.keys(data), k=>data[k]);
    });

  }

}
