import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-snowcard-app';
}
