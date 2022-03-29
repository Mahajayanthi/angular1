import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class canteenService {

  private baseUrl = 'http://localhost:8080/api/canteen';

  constructor(private http:HttpClient) { }

  getcanteenList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createcanteen(canteen: object): Observable<object> {
     return this.http.post(`${this.baseUrl}`+'save-canteen', canteen);
  }

  deletecanteen(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-canteen/${id}`, { responseType: 'text' });
  }

  getcanteen(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/canteen/${id}`);
  }

  updatecanteen(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-canteen/${id}`,value);
  }
  
}                                           