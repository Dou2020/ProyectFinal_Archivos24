import { Component, OnInit } from '@angular/core';
import { ValidateService } from "./../../../services/login/validate.service";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  
  empl:String = ""
  
  constructor(private employeer:ValidateService){
    this.empl = this.employeer.getUsuario()[0]?.name
  }

  ngOnInit(): void {
      //console.log(this.empl);
  }
  
}
