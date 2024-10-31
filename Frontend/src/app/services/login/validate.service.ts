import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient
import { environment } from './../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  //private apiUrl = window.env?.apiUrl || environment.apiUrl;
  
  private apiUrl2 = `http://localhost:3010/api/user/find`;
  private apiUrl3 = `http://localhost:3010/api/user/findId`;

  private usuario: any[] = [];

  constructor(private http: HttpClient) { }
  getData(user:any[]) {
    console.log(user);
    return this.http.post<any[]>(this.apiUrl2,user);
  }
  updateUsuario(){
    return this.http.post<any[]>(this.apiUrl3,{id:this.getUsuario()[0]?._id});
  }

  getUsuario(){
    return this.usuario;
  }
  setUsuario(usuario:any[]){
    this.usuario = usuario;
  }

}
