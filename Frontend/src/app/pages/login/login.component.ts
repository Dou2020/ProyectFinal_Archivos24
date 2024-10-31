import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ValidateService } from "./../../services/login/validate.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  userForm: FormGroup;
  user: FormControl;
  pass: FormControl;

  constructor(private router : Router, private validate:ValidateService){
    
    this.user = new FormControl('');
    this.pass = new FormControl('');

    this.userForm = new FormGroup({
      usuario: this.user,
      pass: this.pass,
    });
  }

  ngOnInit(): void { }
  handleSubmit(): void {
    this.validate.getData(this.userForm.value).subscribe({
      next:(value)=>{
        console.log(value[0].role[0])
        this.validate.setUsuario(value);
        switch (value[0].role[0]) {
          case "user":
            this.router.navigate(["/employeer"]) 
            break;
          case "admin":
            this.router.navigate(["/admin"])
            break;
          default:
            this.router.navigate(["/"])
            break;
        }  
      },error:(err)=>{
          console.log(err);
      }
    })
  }

}
