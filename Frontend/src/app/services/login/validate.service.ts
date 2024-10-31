import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { environment } from './../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  private apiUrl = window.env?.apiUrl || environment.apiUrl;
  
  private apiUrl2 = 'api/user/find/';

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
