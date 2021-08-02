import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url: string = "https://localhost:44320/company";
  
  constructor(private http: HttpClient) { }

  insertCompany(company): any {
    return this.http.post(`${this.url}/addCompany`, company, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    });
  }
}