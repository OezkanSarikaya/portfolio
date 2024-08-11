import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
// import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent  {
  translate = inject(TranslationService);
  mobileNavOpen = false;  

  mobileNavContainer = document.getElementById('mobileMenu');


  closeMenu() {
    this.mobileNavOpen = false;
  }

  public activeSection: string | null = '';

  // ngAfterViewInit(): void {
  //   this.onScroll();
  // }

  @HostListener('window:scroll', ['$event'])
  onScroll(event?: Event) {
    const sections = document.querySelectorAll('.section'); // Annahme: alle relevanten Sektionen haben die Klasse 'section'    
    const scrollPosition = window.pageYOffset + 109; // Ein kleines Offset für bessere Erkennung

    sections.forEach((section: Element) => {
      const htmlElement = section as HTMLElement;
      const sectionTop = htmlElement.getBoundingClientRect().top + window.pageYOffset;
      const sectionHeight = htmlElement.offsetHeight;           

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.activeSection = section.getAttribute('id');
      }
    });
  }  

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
    const body = document.getElementsByTagName('body')[0];

    if (this.mobileNavOpen) {
      body.classList.add('noscroll');
      if (this.mobileNavContainer) {
        this.mobileNavContainer.classList.remove('slideIn');
        this.mobileNavContainer.classList.add('slideOut');
      }
    } else {
      body.classList.remove('noscroll');

      if (this.mobileNavContainer) {
        this.mobileNavContainer.classList.remove('slideOut');
        this.mobileNavContainer.classList.add('slideIn');
      }
    }
  }

}
