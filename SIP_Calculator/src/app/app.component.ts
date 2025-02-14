import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WealthTrack';
}
