import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  translate = inject(TranslationService);
  mobileNavOpen = false;

  mobileNavContainer = document.getElementById('mobileNavContainer');

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
    const body = document.getElementsByTagName('body')[0];

    // let mobileMenu = document.getElementById('mobileMenu');
    if (this.mobileNavOpen) {
      body.classList.add('noscroll');
      if (this.mobileNavContainer) {
        this.mobileNavContainer.classList.add('animate__slideOutRight');
      }

      // this.mobileMenu.classList.add('animate__slideInRight');
    } else {
      body.classList.remove('noscroll');
      if (this.mobileNavContainer) {
        this.mobileNavContainer.classList.add('animate__slideInRight');
      }
      // mobileNav.classList.add('animate__slideOutRight');
    }
  }

  // constructor() {
  //   const body = document.getElementsByTagName('body')[0];
  //   body.classList.add('noscroll');
  // }
  // ngOnDestroy() {
  //    const body = document.getElementsByTagName('body')[0];
  //    body.classList.remove('noscroll');
  // }
}
