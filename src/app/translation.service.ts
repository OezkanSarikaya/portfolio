import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public english = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
  }

  public switchLanguage(): void {
    // this.translate.use(language);
    this.english = !this.english;
    if (this.english) {
      this.translate.use('en');
    } else {
      this.translate.use('de');
    }
  }
}
