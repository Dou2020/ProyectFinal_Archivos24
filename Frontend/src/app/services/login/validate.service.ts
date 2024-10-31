import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  private apiUrl = 'http://localhost:3001/api/user/find/';

  private usuario: any[] = [];

  constructor(private http: HttpClient) { }
  getData(user:any[]) {
    console.log(user);
    return this.http.post<any[]>(this.apiUrl,user);
  }

  getUsuario(){
    return this.usuario;
  }
  setUsuario(usuario:any[]){
    this.usuario = usuario;
  }

}
