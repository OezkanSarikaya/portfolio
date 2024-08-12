import { Component, inject } from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [EmailComponent,TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  translate = inject(TranslationService);
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
