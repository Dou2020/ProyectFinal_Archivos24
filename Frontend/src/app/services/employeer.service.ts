
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeerService {

  private apiUrl = "http://localhost:3001/api/user/find/";

  constructor(private http:HttpClient) { }

  postValue(user:any[]){
    return this.http.post<any[]>(this.apiUrl,user);
  }
}
