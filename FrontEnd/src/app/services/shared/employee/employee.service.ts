import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private url: string = "https://localhost:44320/employee";

  constructor(private http: HttpClient) { }

  insertEmployee(employee): any {
    return this.http.post(`${this.url}/addEmployee`, employee, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    });
  }
}