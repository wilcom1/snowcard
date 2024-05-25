import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule
  ],
  templateUrl: './home.form.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
