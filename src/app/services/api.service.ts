import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) { }

  signup(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);

  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  getUsers(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/users`, {});
  }

  updateUser(id: string, data: any) {
    return this.http.post(`${this.apiUrl}/updateById`, { id, ...data });
  }

  deleteUser(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/deleteById`,{id}

    );
  }
}

