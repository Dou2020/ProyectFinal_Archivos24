import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-archivo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './archivo.component.html',
  styleUrl: './archivo.component.css'
})
export class ArchivoComponent {
  isModalOpen = false;

  openModal(){
    this.isModalOpen = true;
  }
  closeModal(){
    this.isModalOpen = false;
  }
}
