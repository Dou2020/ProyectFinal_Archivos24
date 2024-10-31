import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './../sidebar/sidebar.component'
import { CarpetaComponent } from '../utils/carpeta/carpeta.component';
import { ArchivoComponent } from '../utils/archivo/archivo.component';
import { ImageComponent } from '../utils/image/image.component';
import { ValidateService } from "./../../../services/login/validate.service";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SidebarComponent,CarpetaComponent,ArchivoComponent,ImageComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioEmployeerComponent implements OnInit {

  empl: any[] = []

  constructor(private employeer: ValidateService){
    this.empl = employeer.getUsuario()
    console.log(this.empl);
    
  }

  ngOnInit(): void {
    this.empl = this.employeer.getUsuario()[0]?.storage
  }

}

