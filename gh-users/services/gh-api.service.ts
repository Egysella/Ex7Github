import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhUser } from '../models/ghUser';
import { Repositorios } from '../models/repositorios';

@Injectable()
export class GhApiService {

  private readonly baseUrl: string = 'http://api.github.com/users' //valor apenas para leitura

  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<GhUser> {    //busca a api nome do usuario no github
    return this.http.get<GhUser>('http://api.github.com/users/${username}')
  }
  findRepositor(username: string): Observable<Repositorios[]> {    //busca a api reositorio no github
    return this.http.get<Repositorios[]>('http://api.github.com/users/${username}/repos')
  }
}
