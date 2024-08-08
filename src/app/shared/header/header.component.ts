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

  mobileNavContainer = document.getElementById('mobileMenu');

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
