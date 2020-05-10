import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { ALUNOS } from './mock-alunos';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getAlunos(): Observable<Aluno[]> {
    return of(ALUNOS);
  }
}
