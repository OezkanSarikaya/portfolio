import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})



export class HeaderComponent {
  mobileNavOpen = false;

  mobileMenu = document.getElementById('mobileMenu');

  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
    const body = document.getElementsByTagName('body')[0];

    // let mobileMenu = document.getElementById('mobileMenu');
    if (this.mobileNavOpen) {
      body.classList.add('noscroll');
      if (this.mobileMenu) {
        this.mobileMenu.classList.add('animate__slideInRight');
      }
      
      // this.mobileMenu.classList.add('animate__slideInRight');
    } else {
      body.classList.remove('noscroll');
      if (this.mobileMenu) {
        this.mobileMenu.classList.add('animate__slideOutRight');
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
