import { Injectable } from '@angular/core';
import { ServiceBase } from '../shared/service-base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FilmeService extends ServiceBase{
    constructor(private http: HttpClient){ super();   }

    getBuscarFilme(nome: string): Observable<any>{
        
        return this.http.get<any>(`http://www.omdbapi.com/?s=${nome}&apikey=6912407a`);
    }

    getDetalheFilme(imdbID: string): Observable<any>{
        return this.http.get<any>(`http://www.omdbapi.com/?i=${imdbID}&apikey=6912407a`);
    }
}