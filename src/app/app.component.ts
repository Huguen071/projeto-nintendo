import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { UserProfileMenuComponent } from './components/user-profile-menu/user-profile-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, UserProfileMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-nintendo';
}