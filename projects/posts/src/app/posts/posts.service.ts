import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  public API_URL = 'https://gorest.co.in/public/v2/';

  constructor(private http: HttpClient){}
  headers = {
    headers: new HttpHeaders({
      'authorization' : 'Bearer f1d1ef6aef2d51dc272ffb27529c79973ac743fc8056c089b6b215f7bc993b38'
    })
  }

  getAllUsersPosts(): Observable<any> {
    return this.http.get(this. API_URL + 'posts', this.headers);
   }

   getAllUsers(): Observable<any> {  
    return this.http.get(this.API_URL + 'users', this.headers);
 
  }

  getUserAllPosts(userId: number): Observable<any> {
    return this.http.get(this. API_URL + 'users/' + userId + '/posts', this.headers).pipe(map((data: any)=>{
      
    }));
   }
  
}
