import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {  
  title = 'portfolio';



  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event) {
  //   console.log('Scroll event detected'); // Sollte beim Scrollen ausgegeben werden
  // }


}

AOS.init(
{
  useClassNames: true,
  // initClassName: false,
  // animatedClassName: 'animated',
}
);
