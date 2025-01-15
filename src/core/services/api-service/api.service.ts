import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  // getPosts(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/user`);
  // }

  login(token: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, token);
  }
}