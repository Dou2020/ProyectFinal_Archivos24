import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:3010/api/user"

  constructor(private http:HttpClient) { }

  seaveUser(user:any[]){
    console.log(user);
    return this.http.post<any[]>(this.apiUrl,user)
  }
}
