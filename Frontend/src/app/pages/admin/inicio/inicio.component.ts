import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/seaveUser/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ SidebarComponent, ReactiveFormsModule ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  userForm: FormGroup;
  name: FormControl;
  role: FormControl;
  pass: FormControl;

  constructor(private usu: UserService, private router:Router){
    this.name = new FormControl('')
    this.role = new FormControl('')
    this.pass = new FormControl('')

    this.userForm = new FormGroup({
      name: this.name,
      role: this.role,
      pass: this.pass,
    })
  }
  handleSubmit(){
    this.usu.seaveUser(this.userForm.value).subscribe({
      next:(value)=>{
          console.log(value);
          this.router.navigate(["/admin"])
      },error:(err)=>{
          console.log(err);
      },
    })
  }
  
}
