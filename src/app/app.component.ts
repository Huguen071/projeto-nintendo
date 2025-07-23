import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  FooterComponent } from "./foother/foother.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-nintendo';
}