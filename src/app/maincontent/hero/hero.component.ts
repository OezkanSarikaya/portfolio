import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { EmailComponent } from '../../email/email.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule,EmailComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  translate = inject(TranslationService);
}
