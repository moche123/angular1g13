import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //! INYECCION DE DEPENDENCIAS ===> Yo no creo nada, utilizo lo ya creado
  constructor( private http: HttpClient ) { }


  //* METODO QUE REALIZA LA PETICION A LA API */
  getCharacteres(): Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character').pipe( //! PIPE RXJS
      map( (res:any) => res.results )
    )

  }

}
