import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgClass],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  isOpen = false

  openModal(){
    this.isOpen =  true;
  }
  closeModal(){
    this.isOpen =  false;
  }

}
