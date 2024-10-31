import { Component } from '@angular/core';
import { SidebarComponent } from "./../sidebar/sidebar.component";
import { CarpetaComponent } from "./../utils/carpeta/carpeta.component";

@Component({
  selector: 'app-compartido',
  standalone: true,
  imports: [SidebarComponent,CarpetaComponent],
  templateUrl: './compartido.component.html',
  styleUrl: './compartido.component.css'
})
export class CompartidoComponent {

}
