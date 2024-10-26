import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FlowbiteService} from './flowbite.service';
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  title = 'Frontend';

  ngOnInit(): void {
      this.flowbiteService.loadFlowbite(flowbite => {
        console.log('Flowbite loaded', flowbite)
      })
  }
}
