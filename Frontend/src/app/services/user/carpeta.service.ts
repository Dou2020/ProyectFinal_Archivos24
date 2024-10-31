import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarpetaService {

  urlApi = "http://localhost:3010/api/folder/insert"

  constructor(private http:HttpClient) { }

  seaveCarpeta(user:any[]){
    console.log(user);
    return this.http.post<any[]>(this.urlApi,user)
  }
}
