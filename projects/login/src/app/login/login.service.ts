import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
const API = "https://gorest.co.in/public/v2/"
export interface User {
  id: number;
  email: string;
  gender: string;
  status: string;
  name: string;
}
const CommonServices = {
  UserUrl: `${API}users`,
  PostUrl: `${API}posts`,
}

export const IndexServices = {
  CommonServices: CommonServices
};
@Injectable({
  providedIn: 'root',
})
export class loginService {
  public API = "https://gorest.co.in/public/v2/users"
  public BASE_URL = 'https://gorest.co.in/public/v2/';
  public API_URL = 'https://gorest.co.in/public/v2/users';
  headers = {
    headers: new HttpHeaders({
      'authorization' : 'Bearer cc295642acf6e48a4c38ffa934332aa3565bc69111b5fe47dcf4235af2a3a75e'
    })
  }
  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http.get(this.API_URL + url,this.headers).pipe(map((result) => result));
  }

  getUserAllPosts(userId: number): Observable<any> {
    return this.http.get(this. BASE_URL + 'users/' + userId + '/posts', this.headers).pipe(map((data: any)=>{
    
    }));
   }
   getAllUsersPosts(): Observable<any> {
    return this.http.get(this. BASE_URL + 'posts', this.headers);
   }

   getAllUsers(): Observable<any> {  
    return this.http.get(this.BASE_URL + 'users', this.headers);
 
  }

  register(data: any) {
    
    var header = new HttpHeaders().set(
      'authorization',
      'Bearer cf57c82b14e4ce0c0b92c6b92973df50f0cd2bdd606d2a72026e822a4898180f'
    );
    const dummy = {
      id: 4252,
      name: 'Gopaal Bharadwaj',
      email: 'bharadwaj_gopaal@metz-franecki.info',
      gender: 'male',
      status: 'inactive',
    };
    return this.http.post(this.API_URL, data, this.headers);
  }
  
  getService(endpoint: any): Observable<any> {
    return this.http.get(endpoint.url,this.headers);
        
}

postService(endpoint: any): Observable<any> {
  console.log(endpoint,"endpont")
    return this.http.post(endpoint.url, endpoint.data,this.headers)
        ;
}

deleteService(endpoint: any): Observable<any> {
  console.log(endpoint,"endpont")
    return this.http.delete(endpoint.url,this.headers)
        ;
}
getAllCommentsPost(postId: string | number | undefined): Observable<any> {
  return this.http.get(this.BASE_URL + 'posts/' + postId + '/comments', this.headers);
 }


}
