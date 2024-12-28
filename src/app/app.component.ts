import { Component } from '@angular/core';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, ContentComponent], //RouterOutlet,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MonstercatClone';
}
