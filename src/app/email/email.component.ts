import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [],
  template: `<a [href]="emailLink">{{ emailText }}</a>`,
  styleUrl: './email.component.scss'
})
export class EmailComponent {
  emailText: string;
  emailLink: string;

  constructor() {
    const user = 'mail';
    const domain = 'oezkan-sarikaya.de';
    this.emailText = `${user}@${domain}`;
    this.emailLink = `mailto:${user}@${domain}`;
  }
}
