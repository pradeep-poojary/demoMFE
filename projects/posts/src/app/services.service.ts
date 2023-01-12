import { HttpClient,HttpHandler  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = 'https://gorest.co.in/public/v2/';
  constructor(private http: HttpClient) { 

  }

  public get(url: string): Observable<any> {
    return this.http
      .get(this.API_URL + url)
      .pipe(map(result => result));
      
  }

  posts(): Observable<any> {
    
    let url = `https://gorest.co.in/public/v2/users/218/posts`;
    return this.http.get(url);

  }

  public getComments(): Observable<any> {
    return this.http.get('https://gorest.co.in/public/v2/posts/218/comments').pipe(map((result) => result));
  }
  
}
