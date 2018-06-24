import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ImageModel } from '../model/image-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private baseUrl = 'api/heroes';

  constructor(private http: HttpClient) { }

    /** GET heroes from the server */
    getImages (): Observable<ImageModel[]> {
      return this.http.get<ImageModel[]>(this.baseUrl)
        .pipe(
          tap(heroes => this.log(`fetched heroes`)),
          catchError(this.handleError('getHeroes', []))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      //this.messageService.add('HeroService: ' + message);
    }
}
