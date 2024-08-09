import { Component } from '@angular/core';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [EmailComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
