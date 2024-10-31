import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ValidateService } from "./../../../../services/login/validate.service";
import { CarpetaService } from "./../../../../services/user/carpeta.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-carpeta',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './carpeta.component.html',
  styleUrl: './carpeta.component.css'
})
export class CarpetaComponent implements OnInit{

  isOpen = false 

  userForm: FormGroup;
  user: FormControl;
  carpeta: FormControl;
  
  constructor(private usuario:ValidateService, private folder:CarpetaService, private router:Router){
    console.log(usuario.getUsuario()[0]?._id);
    this.user = new FormControl(usuario.getUsuario()[0]?._id);
    this.carpeta = new FormControl('');

    this.userForm = new FormGroup({
      id: this.user,
      nameFolder: this.carpeta,
    });

  }
  handleSubmit():void{
    console.log(this.userForm.value);
    
    this.folder.seaveCarpeta(this.userForm.value).subscribe({
      next:(value)=>{
        this.usuario.updateUsuario().subscribe({
          next:(value)=>{
            this.usuario.setUsuario(value)
            this.router.navigate(["/employeer"])    
          },error:(err)=>{
              console.log(err);
              this.router.navigate(["/employeer"])
          },
        })
          console.log(value);
      },error:(err)=>{
          console.log(err);
          
      },
    })
  }

  ngOnInit(): void {
  
  }
  getData():void{
    
  }

  openModal(){
    this.isOpen =  true;
  }
  closeModal(){
    this.isOpen = false;
  }


}
