import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpeta',
  standalone: true,
  imports: [NgClass],
  templateUrl: './carpeta.component.html',
  styleUrl: './carpeta.component.css'
})
export class CarpetaComponent implements OnInit{

  isOpen = false 
  
  constructor(){}
  ngOnInit(): void {

  }
  openModal(){
    this.isOpen =  true;
  }
  closeModal(){
    this.isOpen = false;
  }


}
