import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  API_URL = 'https://gorest.co.in/public/v2/users';

  constructor(private http: HttpClient) { }

  headers = {
    headers: new HttpHeaders({
      'authorization' : 'Bearer cc295642acf6e48a4c38ffa934332aa3565bc69111b5fe47dcf4235af2a3a75e'
    })
  }

  register(data: any) {
    var header = new HttpHeaders().set(
      'authorization',
      'Bearer cc295642acf6e48a4c38ffa934332aa3565bc69111b5fe47dcf4235af2a3a75e'
    );
    
    return this.http.post(this.API_URL, data, this.headers);
  }
}
