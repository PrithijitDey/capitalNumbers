import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface IDataServices {
  navlinks: string;

}

@Injectable
  ({
    providedIn: 'root'
  })

export class DataServices {
  baseUrl = 'http://localhost:3000/';

  pagesUrl = 'pages';
  buttonUrl= 'buttons';


  constructor(private http: HttpClient) { }

  getPages(): Observable<any> {
    return this.http.get<DataServices[]>(this.baseUrl + this.pagesUrl)
  }
  getButton(): Observable<any> {
    return this.http.get<DataServices[]>(this.baseUrl + this.buttonUrl)
  }
}
